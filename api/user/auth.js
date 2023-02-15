import axios from 'axios'

export default async (req, res) => {
  const page = await axios.get('https://baidu.com')

  console.log(page)

  res.status(200).json(req.body)
}
