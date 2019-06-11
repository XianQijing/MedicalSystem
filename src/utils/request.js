import axios from 'axios'
import Vue from 'vue'

const v = new Vue()

// create an axios instance
const service = axios.create({
  // withCredentials: true, // 开启跨域
  baseURL: 'http://api.zbq.runyinkg.cn', // api 的 base_url
  timeout: 5000 // request timeout
})

// service.interceptors.request.use(
//   config => {
//     config.headers = {
//       'Content-Type': 'multipart/form-data'
//     }
//     return config
//   },
//   error => {
//     console.log(error)
//     Promise.reject(new Error(error))
//   }
// )

service.interceptors.request.use(function (config) {
  let token = sessionStorage.getItem('path') === 'admin' ? localStorage.getItem('adminToken') : localStorage.getItem('userToken')
  if (token) {
    config.headers.token = token
  }
  config.headers['content-type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
  // console.log(config)
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// response interceptor
service.interceptors.response.use(
  response => {
    if (response.data.code === 200) {
      return response.data.data
    } else {
      v.$Dialog({
        message: response.data.message,
        title: '错误'
      })
      return Promise.reject(new Error(response.data.message))
    }
  },
  error => {
    return Promise.reject(new Error(error))
  }
)

export default service
