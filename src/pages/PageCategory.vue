<template lang="">
    <div v-if="asyncDataStatus_ready" class="col-full">
      <h1>{{category.name}}</h1>
      <CategoryListItem :category="category"/>
    </div>
</template>
<script>
import CategoryListItem from '@/components/CategoryListItem.vue'
import { mapActions } from 'vuex'
import asyncDataStatus from '@/mixins/asyncDataStatus'
export default {
  components: {
    CategoryListItem
  },
  mixins: [asyncDataStatus],
  props: {
    id: {
      required: true,
      type: String
    }
  },
  methods: {
    ...mapActions('categories', ['fetchCategory']),
    ...mapActions('forums', ['fetchForums'])
  },
  computed: {
    category () {
      return this.$store.state.categories.items[this.id]
    }
  },
  created () {
    this.fetchCategory({id: this.id})
      .then(category => this.fetchForums({ids: category.forums}))
      .then(() => { this.asyncDataStatus_fetched() })
  }
}
</script>
<style lang="">
</style>