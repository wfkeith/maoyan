<template>
  <div>
    <router-view></router-view>
    <navbar/>
  </div>
</template>
<script>
import navbar from '@/components/navbar.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    navbar
  },
  methods: {
    ...mapActions(['getflim'])
  },
  created () {
    this.getflim()
  }
}
</script>
