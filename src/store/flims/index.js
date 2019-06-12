import http from '@/utils/http'
import { Toast } from 'vant'
export default {
  namespaced: true,
  state: {
    flimList: [],
    pageNum: 2,
    movieId: [],
    isLoading: false
  },
  mutations: {
    GETFLIM (state, flim) {
      state.flimList = flim
      // state.arr = flim
    },
    GETMOVIE (state, id) {
      state.movieId = id
    },
    SETLOADING (state, bol) {
      state.isLoading = bol
    }
  },
  actions: {
    getflim ({ commit, state }, bol) {
      Toast.loading({
        duration: 0,
        message: '加载中...'
      })
      commit('SETLOADING', true)
      setTimeout(() => {
        let params, reqid
        if (bol) {
          reqid = state.movieId.splice(0, 9)
          reqid = reqid.join(',')
          params = 'moreComingList?token=&movieIds=' + reqid
          // console.log(reqid)
        } else {
          params = 'movieOnInfoList?token='
          // bol = bol || true
          // commit('SETLOADING', bol)
        }
        http.get('http://localhost:8080/maoyan/ajax/' + params)
          .then(response => {
            if (response.coming.length == 0) {
              let res = response.movieList
              commit('GETFLIM', res)
              commit('GETMOVIE', response.movieIds.splice(12))
            } else {
              let newList = [...state.flimList, ...response.coming]
              console.log(newList)
              commit('GETFLIM', newList)
            }
            Toast.clear()
            commit('SETLOADING', false)
          })
          .catch(error => {
            console.log(error)
            Toast.clear()
          })
      }, 500)
    }
  }
}
