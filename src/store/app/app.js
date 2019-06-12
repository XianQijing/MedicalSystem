import { dict } from '@/services/app.js'

const state = {
  columns: ['通过', '不通过', '建议修改'],
  selectData: {}
}
const mutations = {
  getSelectData (state, data) {
    state.selectData = data
  }
}
const actions = {
  async getSelectData (state) {
    const data = await dict()
    state.commit('getSelectData', data)
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
