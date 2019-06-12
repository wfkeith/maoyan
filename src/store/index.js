import Vue from 'vue'
import Vuex from 'vuex'
import film from './flims'
import city from './city/city'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    film,
    city
  }
})
