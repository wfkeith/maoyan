import Vue from 'vue'
import Vuex from 'vuex'
import film from './flims/index'
import city from './city/city'
import wish from './flims/wish'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    film,
    city,
    wish
  }
})
