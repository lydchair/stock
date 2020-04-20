import VueNativeSock from 'vue-native-websocket'
import Vue from 'vue'
import App from './App.vue'
import store from './store'

import { CardPlugin, LayoutPlugin, ButtonPlugin, ToastPlugin } from 'bootstrap-vue'
import { BIconCheck, BIconX, BIconArrowClockwise, BIconDash } from 'bootstrap-vue'
Vue.use(CardPlugin)
Vue.use(LayoutPlugin)
Vue.use(ButtonPlugin)
Vue.use(ToastPlugin)
Vue.component('b-icon-check', BIconCheck)
Vue.component('b-icon-arrow-clockwise', BIconArrowClockwise)
Vue.component('b-icon-x', BIconX)
Vue.component('b-icon-dash', BIconDash)

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === 'development' ? true : false;

let socketUrl = process.env.VUE_APP_SOCKETURL || 'ws://localhost:8080/';

Vue.use(VueNativeSock, socketUrl, {
  store,
  format: 'json',
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 500,
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
