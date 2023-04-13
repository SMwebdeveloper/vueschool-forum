<template lang="">
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="posts" />
    <PostEditor @save="addPost" :threadId="id" />
  </div>
</template>
<script>
import sourceData from '@/data'
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'
export default {
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      thread: sourceData.threads[this.id]
    }
  },
  computed: {
    posts () {
      const postsId = Object.values(this.thread.posts)
      return Object.values(sourceData.posts).filter(post =>
        postsId.includes(post['.key'])
      )
    }
  },
  methods: {
    addPost (event) {
      const post = event.post
      const postId = event.post['.key']
      this.$set(sourceData.posts, postId, post)
      this.$set(this.thread.posts, postId, postId)
      this.$set(sourceData.users[post.userId].posts, postId, postId)
    }
  }
}
</script>
