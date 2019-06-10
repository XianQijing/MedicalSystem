import axios from 'axios'
import Vue from 'vue'

const v = new Vue()

// create an axios instance
const service = axios.create({
  baseURL: 'http://api.zbq.runyinkg.cn', // api 的 base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'multipart/form-data'
    }

    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    if (response.code === 200) {
      return response.data.data
    } else {
      v.$Dialog({
        message: response.data.message,
        title: '错误'
      })
      return response.data
    }
  },
  error => {
    return Promise.reject(new Error(error))
  }
)

export default service
