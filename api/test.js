import axios from 'axios'

export default async (req, res) => {
  const result = await axios({
    method: 'get',
    url: 'http://www.weather.com.cn/data/sk/101190408.html'
  })

  res.status(200).send({
    msg: 'request successful',
    data: result.data
  })
}
