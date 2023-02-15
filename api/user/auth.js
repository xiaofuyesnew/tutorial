import axios from 'axios'

export default async (req, res) => {
  const result = await axios({
    method: 'POST',
    headers: {
      Accept: 'application/json'
    },
    url: 'https://github.com/login/oauth/access_token',
    data: {
      'client_id': '8936ce20162fada9e7ac',
      'client_secret': 'e26ff315227a28793c406505ded51a73a85b3b0a',
      code: req.body.code
    }
  })

  const userInfo = await axios({
    headers: {
      Authorization: `Bearer ${result.data.access_token}`
    },
    url: 'https://api.github.com/user'
  })

  console.log(result.data)
  console.log(userInfo.data)

  res.status(200).json(req.body)
}
