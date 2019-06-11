import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import app from '../app/app'
import Layout from './modules/layout.js'
import Login from './modules/login.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  modules: {
    app,
    Layout,
    Login
  }
})
