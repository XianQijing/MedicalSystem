import Vue from 'vue'
import App from './App'
import router from './index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { DatetimePicker, Picker, RadioGroup, Radio, Toast } from 'vant'

import '@/common/style/reset.css'
import '@/common/style/iconfont.css'
import 'swiper/dist/css/swiper.css'
import '@/common/style/index.styl'

Vue.config.productionTip = false
Vue.use(Picker)
  .use(RadioGroup)
  .use(Radio)
  .use(VueAwesomeSwiper)
  .use(Toast)
  .use(DatetimePicker)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
