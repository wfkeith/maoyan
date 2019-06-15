<template>
  <div class="container">
    <div class="main" ref="main">
      <div class="curcity">
        <p class="cur_tit">当前城市</p>
        <span class="location-city cur_location">定位失败，点击重试</span>
      </div>
      <div class="hotcity" ref="hot">
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
        <ul ref='list' style="overflow-y:scroll">
          <li
            v-for="(item, index) in sortList"
            :key="index"
            >
            <p
              class="hot_tit city-tit"
              ref="py"
              >
              {{ item.py }}
            </p>
            <div
              class="city-item"
              v-for="city in item.list"
              :key="city.id"
              >
              {{ city.nm }}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="selection">
      <div @click="$refs.main.scrollTop = 0">定位</div>
      <div @click="$refs.main.scrollTop = $refs.hot.offsetTop">热门</div>
      <div
        v-for="(item, index) in sortList"
        :key="index"
        @click="$refs.main.scrollTop = $refs.py[index].offsetTop"
        >
        {{ item.py }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('city', ['cityList']),
    ...mapGetters('city', ['sortList'])
  },
  watch: {
    sortList (newVal, oldVal) {
      // console.log(newVal)
      console.log(this.sortList)
    }
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    ...mapActions('city', ['getcitys']),
    setCity (index) {
      let target = this.$refs.py[index].offsetTop
      // this.$refs.main.scrollTop = this.$refs.list.offsetTop
      this.$refs.main.scrollTo = 2000
      // this.$refs.py[0].scrollTop = 1000
      console.log(this.$refs)
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
