<template>
  <div class="flex-grid">
    <h1>My Profile</h1>
    <!-- <UseProfileCard
      v-if="!edit"
      :user="user"
    />
    <UseProfileCardEditor
      v-else
      :user="user"
    />
    <div class="col-7 push-top">
      <div class="profile-header">
        <span class="text-lead">
          {{ user.username }} recent activity
        </span>
        <a href="#">See only started threads?</a>
      </div>

      <hr />
      <PostList :posts="userPosts" />
    </div> -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import PostList from '../components/PostList'
import UseProfileCard from '../components/UseProfileCard'
import UseProfileCardEditor from '../components/UseProfileCardEditor'

export default {
  components: {
    PostList,
    UseProfileCard,
    UseProfileCardEditor
  },
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'authUser'
    }),
    userPosts () {
      if (this.user.posts) {
        return Object.values(this.$store.state.posts)
          .filter(post => post.userId === this.user['.key'])
      }
      return []
    }
  },
  created () {
    this.$emit('ready')
  }
}
</script>