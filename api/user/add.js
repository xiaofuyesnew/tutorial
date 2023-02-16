import prisma from '../lib/prisma.js'

export default async (req, res) => {
  const existedUser = await prisma.user.findUnique({
    where: {
      email: 'xiaofuyesnew@qq.com'
    }
  })

  if (existedUser === null) {
    const user = await prisma.user.create({
      data: {
        userName: 'xiaofuyesnew',
        email: 'xiaofuyesnew@qq.com',
        githubId: 8016493,
        name: 'Allen Wong',
        avatar: 'https://avatars.githubusercontent.com/u/8016493?v=4',
        enrolType: 'GITHUB',
        createAt: '2023-02-16 15:13:34'
      }
    })

    console.log(user)
    res.status(200).send(user)
  } else {
    res.status(200).send(existedUser)
  }
}
