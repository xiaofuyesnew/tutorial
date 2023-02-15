import axios from 'axios'

export default async (req, res) => {
  axios({
    method: 'get',
    url: 'http://www.weather.com.cn/data/sk/101190408.html'
  }).then(result => {
    console.log(result)
  })

  res.status(200).json({
    msg: 'request successful'
  })
}
