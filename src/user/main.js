import Vue from 'vue'
import App from './App'
import router from './index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from '../store/user'
import Dialog from '@/components/toast/toast.js'
import MessageBox from '@/components/messageBox/messageBox.js'
import CTitle from '@/components/title/title.js'
import JInput from '@/components/input/index.js'
import IconSvg from '@/components/icon-svg/index.js'

import { Picker, Radio, RadioGroup, DatetimePicker, Toast, Popup } from 'vant'

import '@/common/style/reset.css'
import '@/common/style/iconfont.css'
import 'swiper/dist/css/swiper.css'
import '@/common/style/index.styl'
import '@/common/iconfont/iconfont.js'

Vue.config.productionTip = false
Vue.use(Picker)
  .use(RadioGroup)
  .use(Radio)
  .use(VueAwesomeSwiper)
  .use(Toast)
  .use(DatetimePicker)
  .use(Dialog)
  .use(MessageBox)
  .use(Popup)
  .use(CTitle)
  .use(JInput)
  .use(IconSvg)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
