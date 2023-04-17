<template lang="">
  <div class="post-list">
    <PostListItem
      v-for="post in posts"
      :post="post"
      :key="post['.key']"
    />
  </div>
</template>
<script>
import PostListItem from './PostListItem.vue'
export default {
  components: {
    PostListItem
  },
  props: {
    posts: {
      required: true,
      type: Array
    }
  },
  mounted () {
    console.log(this.posts)
  }
}
</script>
<style lang=""></style>
