import Vue from 'vue'
import App from './App'
import router from './index'
import Dialog from '@/components/toast/toast.js'
import MessageBox from '@/components/messageBox/messageBox.js'
import store from '../store/admin'
import JInput from '@/components/input/index.js'
import CTitle from '@/components/title/title.js'
import { Picker, DatetimePicker, Toast, Popup, Radio, RadioGroup } from 'vant'

import '@/common/style/reset.css'
import '@/common/style/iconfont.css'
import '@/common/style/index.styl'

Vue
  .use(Picker)
  .use(Dialog)
  .use(DatetimePicker)
  .use(Toast)
  .use(MessageBox)
  .use(Popup)
  .use(Radio)
  .use(RadioGroup)
  .use(CTitle)
  .use(JInput)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
