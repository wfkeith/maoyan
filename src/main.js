import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import { NavBar, Tab, Tabs, Button, Icon, Toast } from 'vant'
Vue.use(NavBar)
  .use(Tab)
  .use(Tabs)
  .use(Button)
  .use(Icon)
  .use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
