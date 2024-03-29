import axios from 'axios'

const http = axios.create()

http.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080'

http.defaults.timeout = 10000

http.interceptors.response.use(response => {
  let res = response.data
  return res
}, error => {
  console.log(error.msg)
})

export default http
