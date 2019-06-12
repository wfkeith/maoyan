<template>
  <div class="bottomBar">
    <router-link
     v-for="item in nav"
     :key=item.id
     to="/cinema"
     tag="div"
     >
      <span class="iconfont" :class="item.icon">
      </span>
      <p>{{ item.select }}</p>
    </router-link>
  </div>
</template>
<style>
@import "//at.alicdn.com/t/font_1233862_237r7kuhsoj.css";
.bottomBar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 48px;
  background: pink;
}
.bottomBar > div {
  height: 43px;
  float: left;
  width: 33%;
  padding-top: 5px;
  text-align: center;
}
.bottomBar > div span {
  font-size: 24px;
}
.bottomBar > div p {
  margin-top: -5px;
  font-size: 12px;
}
</style>
<script>
export default {
  data () {
    return {
      msg: 'hello',
      nav: [
        {
          id: 1, select: '电影', icon: 'icon-dianyingpiaoiocn'
        },
        {
          id: 2, select: '影院', icon: 'icon-dianyingpiao'
        },
        {
          id: 3, select: '我的', icon: 'icon-nickname'
        }
      ]
    }
  }
}
</script>
