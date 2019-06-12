
import http from '@/utils/http'

export default {
  namespaced: true,
  state: {
    cityList: Array
  },
  mutations: {
    SETCITYS (state, list) {
      state.cityList = list
    }
  },
  actions: {
    getcitys ({ commit }) {
      http.get('http://localhost:8080/maoyan/dianying/cities.json')
        .then(res => {
          console.log(res)
          commit('SETCITYS', res)
        })
        .catch(err => {
          console.log(err.msg)
        })
    }
  }

}
