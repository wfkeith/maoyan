
import http from '@/utils/http'

export default {
  namespaced: true,
  state: {
    cityList: []
  },
  getters: {
    sortList (state) {
      var target = []
      let index = 0
      let hash = {}
      state.cityList.forEach(item => {
        let py = item.py.charAt(0).toUpperCase()
        if (hash[py]) {
          target[hash[py] - 1].list.push(item)
        } else {
          hash[py] = ++ index
          let obj = {
            py: py,
            list: [item]
          }
          target.push(obj)
        }
      })
      return target.sort((a, b) =>  a.py.charCodeAt() - b.py.charCodeAt())
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
