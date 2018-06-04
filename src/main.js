// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Cs from '../packages/index'
import highlight from './plugins/highlight'
// import CsApi from './components/Api'
Vue.use(Cs)
Vue.use(highlight)
// Vue.component('cs-api', CsApi)
Vue.config.productionTip = false
// Vue.component('cs-input', CsInput)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
