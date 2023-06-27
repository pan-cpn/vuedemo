<template>
  <div id="app">
   <router-view></router-view>
   <tar-bar></tar-bar>
  </div>
</template>

<script>

import TarBar from '@/components/tarbar/TarBarControl.vue'

export default {
  name: 'App',
  components: {
    TarBar
  }
}
</script>

<style>

</style>
