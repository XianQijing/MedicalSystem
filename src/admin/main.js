import Vue from 'vue'
import App from './App'
import router from './index'
import { Picker, Dialog, DatetimePicker, Toast } from 'vant'

import '@/common/style/reset.css'
import '@/common/style/iconfont.css'
import '@/common/style/index.styl'

Vue.use(Picker).use(Dialog).use(DatetimePicker).use(Toast)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
