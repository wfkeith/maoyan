<template>
  <ul>
    <li
      v-for="item in list"
      :key="item.id"
      class="main-block"
      >
      <img :src="item.img" class="avator"/>
      <div class="main-right">
        <h4>
          <span class="nm">{{ item.nm }}</span>
          <span class="imax" :class="item.version == 'v3d imax' ?'':'towD'"></span>
        </h4>
        <div class="sc">
          观众评<span>{{ item.sc }}</span>
        </div>
        <br />
        <div class="actors">
          主演：{{ item.star }}
        </div>
        <br />
        <div class="showInfo">
          {{ item.showInfo }}
        </div>
      </div>
      <button class="btn">购买</button>
      <!-- <button></button> -->
    </li>
  </ul>
</template>

<style>
.main-block {
  width: 346.6px;
  height: 114px;
  margin-left: 15px;
}
.main-right {
  float: left;
  margin-left: 10px;
  width: 205px;
  height: 114px;
  padding-top: 12px;
  box-sizing: border-box;
  font-size: 13px;
  color: #666;
}
.btn {
  float: right;
  box-sizing: border-box;
  background-color: #f03d37;
  width: 47px;
  height: 27px;
  border-radius: 4px;
  border: 0;
  color: #fff;
  text-align: center;
  line-height: 27px;
  margin-top: 40px;
}
.main-right h4 {
  color: #333;
  font-size: 17px;
  height: 24px;
  line-height: 24px;
}
.nm {
  font-weight: 700;
  font-size: 18px;
  color: #333;
}
.imax {
  margin-left: 3px;
  width: 43px;
  height: 14px;
  display: inline-block;
  background: url("~@/img/3d.png") no-repeat;
  background-size: cover;
}
.towD {
  background-image: url("~@/img/2d.png")
}

.main-right button {
  float: right;
}
.sc {
  margin-top: 7px;
  float: left;
  line-height: 14px;
  font-size: 13px;
  font-weight: 500;
  color: #666;
  height: 14px;
  width: 205px;
}
.sc > span{
  margin-left: 3px;
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.avator {
  width: 64px;
  height: 90px;
  position: relative;
  margin-top: 12px;
  float: left;
}
.showInfo {
  width: 205px;
  height: 14px;
  line-height: 14px;
  margin-top: 6px;
}
.actors {
  margin-top: 6px;
  float: left;
  height: 15px;
  line-height: 15px;
  width: 205px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>

<script>
export default {
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      newlist: []
    }
  },
  watch: {
    list () {
      this.getSrc()
    }
  },
  methods: {
    getSrc () {
      // console.log(this.list)
      this.list.forEach(item => {
        // https://p0.meituan.net/128.180/
        item.img = item.img.replace(/^http:\/\/p\d.meituan.net\/w.h/g, 'https://p0.meituan.net/128.180/')
      })
    }
  },
  created () {
    // console.log(this.list)
    if (this.list.length > 0) {
      this.getSrc()
      console.log(this.list)
    }
  }
}
</script>
