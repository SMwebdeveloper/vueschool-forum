<template>
  <div id="app">
    <TheNavbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
export default {
  name: 'app',
  components: {
    TheNavbar
  }
}
</script>

<style>

@import "assets/css/style.css"

</style>
