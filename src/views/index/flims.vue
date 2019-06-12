<template>
  <div class="content">
    <div
      class="navbar"
      >
      猫眼电影
    </div>
    <div class="select">
      <span>定位</span>
      <div class="switch active" >正在热映</div>
      <div class="switch" >即将上映</div>
    </div>
    <movieList class="main" :list="flimList"></movieList>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import movieList from '@/components/movieList.vue'
export default {
  data () {
    return {
      active: 0
    }
  },
  components: {
    movieList
  },
  computed: {
    ...mapState('film', [
      'flimList',
      'pageNum'
    ])
  },
  methods: {
    ...mapActions('film', ['getflim'])
  },
  created () {
    this.getflim()
    // console.log(this.movieList)
    // console.log(this.pageNum, this.flimList)
  }
}
</script>
<style>
@import '~@/style/films/index.less'
</style>
