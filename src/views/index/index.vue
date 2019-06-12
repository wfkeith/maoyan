<template>
  <div class="contener">
    <router-view class="con_rv"></router-view>
    <navbar class="con_cm"/>
  </div>
</template>
<style>
  html, body {
    height: 100%;
  }
  .contener {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
  .con_rv {
    flex: 1;
  }
  .con_cm {
    flex-shrink: 0;
  }
</style>
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
    // this.getflim()
  }
}
</script>
