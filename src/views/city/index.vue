<template>
  <div>
    hello
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
