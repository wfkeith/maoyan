import http from '@/utils/http'

export default {
  namespaced: true,
  state: {
    wishList: [],
    comingList: []
  },
  mutations: {
    SETWISHLIST (state, list) {
      state.wishList = list
    },
    SETCOMINTlIST (state, list) {
      state.comingList = list
    }
  },
  actions: {
    getWishList ({ commit, state }) {
      http.get('/maoyan/ajax/mostExpected?ci=30&limit=10&offset=0&token=')
        .then(res => {
          // console.log(res)
          commit('SETWISHLIST', res.coming)
        })
        .catch(err => {
          console.log(err.msg)
        })
    },
    getComingList ({ commit, state }) {
      http.get('/maoyan/ajax/comingList', {
        params: {
          'ci': '30',
          'token': '',
          'limit': '10'
        }
      })
        .then(res => {
          commit('SETCOMINTlIST', res.coming)
          // console.log(state.comingList)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
