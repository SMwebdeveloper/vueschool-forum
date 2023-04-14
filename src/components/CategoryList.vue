<template lang="">
  <div>
    <CategoryListItem
      v-for="category in categories"
      :category="category"
      :key="category['.key']"
    />
  </div>
</template>
<script>
import sourceData from '@/data'
import CategoryListItem from './CategoryListItem'
export default {
  components: {
    CategoryListItem
  },
  data () {
    return {
      categories: Object.values(sourceData.categories)
    }
  }
}
</script>
<style lang=""></style>
