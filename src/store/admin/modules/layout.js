const state = {
  menu: {},
  sideBar: []
}
const mutations = {
  getMenu (state, menu) {
    state.menu = menu
  },
  thisMenu (state, type) {
    console.log(type)
    state.sideBar = state.menu[type].filter(item => !item.meta.hideInMenu)
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
