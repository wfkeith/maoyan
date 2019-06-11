import http from '@/utils/http'
export default {
  namespace: true,
  state: {
    flimList: []
  },
  mutations: {
    GETFLIM (state, flim) {
      state.flimList = flim
    }
  },
  actions: {
    getflim ({ commit }) {
      http.get('http://localhost:8080/maoyan/ajax/movieOnInfoList')
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.msg)
        })
    }
  }
}