import Vue from 'vue'
import App from './App'
import router from './index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Picker } from 'vant'

import '@/common/style/reset.css'
import '@/common/style/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(Picker)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
