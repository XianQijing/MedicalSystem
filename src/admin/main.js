import Vue from 'vue'
import App from './App'
import router from './index'
import { Checkbox, CheckboxGroup } from 'vant'

import '@/common/style/reset.css'
import '@/common/style/iconfont.css'
import '@/common/style/index.styl'

Vue.use(Checkbox).use(CheckboxGroup)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
