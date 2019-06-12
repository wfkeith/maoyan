import http from '@/utils/http'
import { Toast } from 'vant'
export default {
  namespaced: true,
  state: {
    flimList: [],
    pageNum: 2,
    arr: []
  },
  mutations: {
    GETFLIM (state, flim) {
      state.flimList = flim
      // state.arr = flim
    }
  },
  actions: {
    getflim ({ commit }) {
      Toast.loading({
        duration: 0,
        message: '加载中...'
      })
      setTimeout(() => {
        http.get('http://localhost:8080/maoyan/ajax/movieOnInfoList')
          .then(response => {
            let res = response.movieList
            commit('GETFLIM', res)
            Toast.clear()
          })
          .catch(error => {
            console.log(error.msg)
          })
      }, 500)
    }
  }
}
