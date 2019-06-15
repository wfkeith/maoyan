<template>
  <div class="container">
    <div class="main">
      <div class="curcity">
        <p class="cur_tit">当前城市</p>
        <span class="location-city cur_location">定位失败，点击重试</span>
      </div>
      <div class="hotcity">
        <p class="hot_tit">热门城市</p>
        <div
          v-for="item in 10"
          :key="item.id"
          class="location-city"
          >
          {{ item }}
        </div>
      </div>
      <div>
        <div>A</div>
        <ul>
          <li
            v-for="item in 200"
            :key="item"
            >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="selection">
      123
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('city', ['cityList'])
  },
  watch: {
    cityList (newVal, oldVal) {
      // console.log(newVal)
      this.sortCity(newVal)
    }
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    ...mapActions('city', ['getcitys']),
    sortCity (list) {
      console.log(list)
    }
  },
  created () {
    this.getcitys()
  }
}
</script>
<style scoped>
@import '~@/style/city/index.less';
</style>
