<template lang="">
    <div class="forum-list">
      <h2 class="list-title">
        <a href="category.html">Feedback &amp; Infomation</a>
      </h2>
      <ForumListItem
        v-for="forum in forums"
        :forum="forum"
        :key="forum['.key']"/>
    </div>
</template>
<script>
import ForumListItem from './ForumListItem.vue'
export default {
  components: {
    ForumListItem
  },
  props: {
    forums: {
      required: true,
      type: Array
    }
  }
}
</script>
<style lang="">
</style>