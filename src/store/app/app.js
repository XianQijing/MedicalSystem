const state = {
  title: '登录',
  columns: ['通过', '不通过', '建议修改']
}
const mutations = {
  changeTitle (state, title) {
    state.title = title
  }
}
const actions = {
}
const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}
