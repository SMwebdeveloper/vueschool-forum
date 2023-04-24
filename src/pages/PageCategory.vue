<template lang="">
    <div v-if="category" class="col-full">
      <h1>{{category.name}}</h1>
      <CategoryListItem :category="category"/>
    </div>
</template>
<script>
import CategoryListItem from '@/components/CategoryListItem.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    CategoryListItem
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  methods: {
    ...mapActions(['fetchCategory', 'fetchForums'])
  },
  computed: {
    category () {
      return this.$store.state.categories[this.id]
    }
  },
  created () {
    this.fetchCategory({id: this.id})
      .then(category => {
        this.fetchForums({ids: category.forums})
      })
  }
}
</script>
<style lang="">
</style>