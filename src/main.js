import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

require('../../revelry-hero/src/assets/styles/container.css')
require('../../revelry-hero/src/assets/styles/hero.css')
require('../../revelry-hero/src/assets/styles/mobile.css')
require('../../revelry-hero/src/assets/styles/nav.css')
require('../../revelry-hero/src/assets/styles/specialty.css')