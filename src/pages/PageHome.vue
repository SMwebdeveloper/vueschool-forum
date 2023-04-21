<template>
  <div class="col-full push-top">
    <h1>Welcome to the Forum</h1>
    <CategoryList :categories="categories"/>
  </div>
</template>

<script>
import CategoryList from '@/components/CategoryList'
import { mapState } from 'vuex'
export default {
  components: {
    CategoryList
  },
  computed: {
    ...mapState({
      categories: 'categories'
    })
  },
  beforeCreate () {
    this.$store.dispatch('fetchAllCategories')
      .then(categories => {
        categories.forEach(category => this.$store.dispatch('fetchForums', {ids: Object.keys(category.forums)}))
        console.log(categories)
      })
  }
}
</script>