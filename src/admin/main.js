import Vue from 'vue'
import App from './App'
import router from './index'
import Dialog from '@/components/toast/toast.js'
import MessageBox from '@/components/messageBox/messageBox.js'
import store from '../store/user'
import { Picker, DatetimePicker, Toast } from 'vant'

import '@/common/style/reset.css'
import '@/common/style/iconfont.css'
import '@/common/style/index.styl'

Vue.use(Picker).use(Dialog).use(DatetimePicker).use(Toast).use(MessageBox)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
