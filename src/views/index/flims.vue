<template>
  <div class="content">
    <div
      class="navbar"
      > 猫眼电影</div>
    <div class="select">
      <router-link tag="span" to="/city">定位</router-link>
      <div class="switch" :class="active == 1 ? '' : 'active'" @click="active = 0">正在热映</div>
      <div class="switch" :class="active == 1 ? 'active' : ''" @click="active = 1">即将上映</div>
    </div>
    <movieList ref="main1" class="main" :list="flimList" v-if="active == 0"></movieList>
    <wishMovie class="main" v-else></wishMovie>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import movieList from '@/components/movieList.vue'
import wishMovie from '@/components/wishMovie.vue'
import { Toast } from 'vant'
export default {
  data () {
    return {
      active: 0
    }
  },
  components: {
    movieList,
    wishMovie
  },
  computed: {
    ...mapState('film', [
      'flimList',
      'pageNum',
      'isLoading',
      'movieId'
    ])
  },
  methods: {
    ...mapActions('film', ['getflim']),
    Onscroll () {
      let scrollTop = this.$refs.main1.$el.scrollTop
      let scrollHeight = this.$refs.main1.$el.scrollHeight
      let clientHeight = this.$refs.main1.$el.clientHeight
      if (scrollHeight - (scrollTop + clientHeight) <= 50) {
        if (this.movieId.length > 0) {
          if (!this.isLoading) {
            this.getflim(true)
          }
        } else {
          Toast.fail('到底啦！')
        }
      }
    }
  },
  created () {
    this.getflim()
    // window.addEventListener("scroll", this.Onscroll)
  },
  mounted () {
    if (this.active === 0) {
      this.$refs.main1.$el.addEventListener('scroll', this.Onscroll)
    }
  },
  updated () {
    if (this.active === 0) {
      this.$refs.main1.$el.addEventListener('scroll', this.Onscroll)
    }
  }
}
</script>
<style scoped>
@import '~@/style/films/index.less';
</style>
