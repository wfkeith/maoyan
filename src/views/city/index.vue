<template>
  <div>
    <div>
      <p>当前城市</p>
      <span></span>
    </div>
    <div>
      <p>热门城市</p>
      <div>123</div>
    </div>
    <div>
      <div>A</div>
      <ul>
        <li>123</li>
      </ul>
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
      console.log(newVal)
    }
  },
  methods: {
    ...mapActions('city', ['getcitys'])
  },
  created () {
    this.getcitys()
  }
}
</script>
<style>

</style>
