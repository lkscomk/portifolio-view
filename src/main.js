import '@/plugins/dayjs'
import '@/plugins/validate'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.component('loading', () => import('./components/loading'))
Vue.component('notificacao', () => import('./components/notificacao'))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
