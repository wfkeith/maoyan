import axios from 'axios'

const http = axios.create();

http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://www.baidu.com' : "http://www.baidu.com"

http.defaults.timeout = 10000

http.interceptors.response.use(response => {
  let res = response.data
  if (res.status === 0) {
    return res
  } else {
    console.log('error')
  }
}, error => {
  console.log(error.msg)
})

export default http
