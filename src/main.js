import Vue from 'vue'
import App from './App.vue'
import 'likerpx'
import '@/assets/css/default.styl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
