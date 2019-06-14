<template>
  <div class="container">
    <div class="mostwish">
      <p class="title">近期最受期待</p>
      <ul class="wishlist">
        <li
          class="wish-item"
          v-for="item in wishList"
          :key="item.id"
          >
          <div class="poster">
            <img :src="item.img" class="poster_img">
            <div class="wish_bg">
             <p class="wish_num"><span>{{ item.wish }}</span>人想看</p>
            </div>
          </div>
          <h5 class="name">{{ item.nm }}</h5>
          <p class="date">{{ item.comingTitle }}</p>
        </li>
      </ul>
    </div>
    <div class="coming">
       <p class="coming_group">
         {{ date }}
       </p>
       <movieList :list="comingList"></movieList>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import movieList from '@/components/movieList.vue'
export default {
  computed: {
    ...mapState('wish', ['wishList', 'comingList'])
  },
  components: {
    movieList
  },
  data () {
    return {
      date: ''
    }
  },
  watch: {
    wishList (newVal, oldVal) {
      // console.log(this.wishList)
      this.resetSrc(newVal)
    },
    comingList (newVal, oldVal) {
      this.resetSrc(newVal)
    }
  },
  methods: {
    ...mapActions('wish', ['getWishList', 'getComingList']),
    resetSrc (list) {
      this.date = this.comingList[0].comingTitle
      list.forEach(item => {
        // https://p0.meituan.net/128.180/
        item.img = item.img.replace(/^http:\/\/p\d.meituan.net\/w.h/g, 'https://p0.meituan.net/128.180/')
      })
    }
  },
  created () {
    this.getWishList()
    this.getComingList()
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }
  .mostwish {
    flex-shrink: 0;
    box-sizing: border-box;
    width: 361px;
    height: 216px;
    background: orange;
    padding: 12px 0 12px 15px;
    background-color: #fff;
    margin-bottom: 10px;
  }
  .mostwish .title {
    margin: 0 0 12px;
    font-size: 14px;
    color: #333;
  }
  .wishlist {
    display: flex;
    overflow-x: scroll;
  }
  ::-webkit-scrollbar {
    height: 0;
  }
  .wish-item {
    height: 157px;
    flex-shrink: 0;
    width: 85px;
    margin-right: 10px;
    overflow: hidden;
  }
  .poster {
    height: 115px;
    width: 85px;
    background: pink;
    margin-bottom: 6px;
    position: relative;
  }
  .poster_img {
    width: 100%;
    height: 100%;
  }
  .wish_bg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 35px;
    background-image: linear-gradient(-180deg, rgba(77,77,77,0), #000)
  }
  .wish_num {
    position: absolute;
    bottom: 2px;
    width: 100%;
    color: #faaf00;
    font-size: 12px;
    left: 4px;
    font-weight: 600;
  }
  .name {
    margin: 0 0 3px;
    font-size: 13px;
    color: #222;
    height: 17px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .date {
    margin: 0;
    font-size: 12px;
    color: #999;
  }
  .coming {
    width: 361px;
    /* background: green; */
  }
  .coming_group {
    padding: 12px 15px 0;
    margin: 0;
    font-size: 14px;
    color: #333;
  }

</style>
