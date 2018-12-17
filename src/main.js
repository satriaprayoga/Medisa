import Vue from 'vue'
import './plugins/vuetify'
import store from './store'
import router from './router'
import VeeValidate from 'vee-validate';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VeeValidate)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
