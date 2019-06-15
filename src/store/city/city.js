
import http from '@/utils/http'

export default {
  namespaced: true,
  state: {
    cityList: []
  },
  getters: {
    sortList (state) {

    }
  },
  mutations: {
    SETCITYS (state, list) {
      state.cityList = list
    }
  },
  actions: {
    getcitys ({ commit }) {
      http.get('/maoyan/dianying/cities.json')
        .then(res => {
          // console.log(res)
          commit('SETCITYS', res.cts)
        })
        .catch(err => {
          console.log(err.msg)
        })
    }
  }

}
