import got from 'got'
import prisma from '../lib/prisma.js'
import { day } from '../utils/index.js'

export default async (req, res) => {
  const result = await got.post('https://github.com/login/oauth/access_token', {
    json: {
      'client_id': process.env.GITHUB_OAUTH_ID,
      'client_secret': process.env.GITHUB_OAUTH_SECRET,
      code: req.body.code
    },
    headers: {
      Accept: 'application/json'
    }
  }).json()

  console.log(result)

  const userInfo = await got.get('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${result.access_token}`
    }
  }).json()

  console.log(userInfo)

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: userInfo.email
      }
    })

    if (user === null) {
      const data = {
        userName: userInfo.login,
        email: userInfo.email,
        githubId: userInfo.id,
        name: userInfo.name,
        avatar: userInfo.avatar_url,
        enrolType: 'GITHUB',
        createAt: day().format('YYYY-MM-DD HH:mm:ss')
      }
      // console.log(data)
      const userCreated = await prisma.user.create({ data })

      // console.log(userCreated)
      res.status(200).send({ msg: 'create user', data: userCreated })
    } else {
      res.status(200).send({ msg: 'user has been existed', data: user })
    }
  } catch (e) {
    res.status(500).send({ err: e.message })
  }
}
