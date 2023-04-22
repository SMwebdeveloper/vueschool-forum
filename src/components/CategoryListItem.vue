<template lang="">
  <div class="forum-list">
    <h2 class="list-title">
      <router-link :to="{name: 'Category', params: {id: category['.key']}}">{{category.name}}</router-link>
    </h2>
    <ForumList
      :forums="categoryForums"
    />
  </div>
</template>
<script>
import ForumList from './ForumList.vue'
export default {
  name: 'CategoryListItem',
  components: {
    ForumList
  },
  props: {
    category: {
      required: true,
      type: Object
    }
  },
  computed: {
    categoryForums () {
      return this.$store.state.forums
    }
  },
  mounted () {
    console.log(this.categoryForums)
  }
}
</script>
<style lang=""></style>
