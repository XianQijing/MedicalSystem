import { dict } from '@/services/app.js'

const state = {
  columns: ['通过', '不通过', '建议修改'],
  selectData: {}
}
const mutations = {
  changeTitle (state, title) {
    state.title = title
  }
}
const actions = {
  async getSelectData (state) {
    const data = await dict()
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
