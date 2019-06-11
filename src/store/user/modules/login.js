import { login } from '@/services/app.js'

const state = {
  token: localStorage.getItem('token'),
  userMessage: null
}
const mutations = {
  Login (state, data) {
    state.userMessage = data.member
    localStorage.setItem('userToken', data.access_token)
  }
}
const actions = {
  async Login (state, form) {
    let member = new FormData()
    member.append('username', form.username)
    member.append('password', form.password)
    member.append('auth', '1')
    const user = await login(member)
    state.commit('Login', user)
    return user
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
