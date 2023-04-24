<template>
  <div id="app">
    <TheNavbar/>
    <div class="container">
      <router-view v-show="showPage" @ready="showPage = true"/>
      <div v-show="!showPage">
        <h4>Loading...</h4>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
export default {
  name: 'app',
  components: {
    TheNavbar
  },
  data () {
    return {
      showPage: false
    }
  },
  created () {
    this.$router.beforeEach((to, from, next) => {
      this.showPage = false
      next()
    })
  }
}
</script>

<style>

@import "assets/css/style.css"

</style>
