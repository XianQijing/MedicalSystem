import { login } from '@/services/app.js'

const state = {
  token: localStorage.getItem('token'),
  userMessage: null
}
const mutations = {

}
const actions = {
  async Login ({commit, state}, form) {
    const member = {
      ...form,
      auth: '2'
    }
    const user = await login(member)
    console.log(user)
  }
}
const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}
