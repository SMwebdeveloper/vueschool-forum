<template lang="">
  <div class="col-large push-top">
    <h1>{{ thread.title }}

      <router-link
       :to="{name: 'ThreadEdit', id: this.id}"
       class="btn-green btn-small"
       tag="button"
      >
       Edit Thread
      </router-link>
    </h1>
    <p>
      By <a href="#" class="link-unstyled">Robin</a>, <AppDate :timestamp="thread.publishedAt"/>.
      <span style="float:right; margin-top: 2px" class="hide-mobile text-faded text-small">{{repliesCount}} replies by {{contributorsCount}} cintributors</span>
    </p>
    <PostList :posts="posts" />
    <PostEditor :threadId="id" />
  </div>
</template>
<script>
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
  computed: {
    thread () {
      return this.$store.state.threads[this.id]
    },
    repliesCount () {
      return this.$store.getters.threadReplicesCount(this.thread['.key'])
    },
    contributorsCount () {
      const replies = Object.keys(this.thread.posts)
        .filter(postId => postId !== this.thread.firstPostId)
        .map(postId => this.$store.state.posts[postId])

      const userId = replies.map(post => post.userId)
      return userId.filter((item, index) => index === userId.indexOf(item)).length
    },
    posts () {
      const postsId = Object.values(this.thread.posts)
      return Object.values(this.$store.state.posts).filter(post =>
        postsId.includes(post['.key'])
      )
    }
  }
}
</script>
