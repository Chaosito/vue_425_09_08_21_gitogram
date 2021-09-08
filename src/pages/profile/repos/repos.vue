<template>
  <div class="header">
    <h1>Repositories</h1>
    <h3>{{ user.public_repos }}</h3>
  </div>
  <div class="loader" v-if="userRepos.loading">
    <spinner />
  </div>
  <div class="user-feeds" v-else>
    <ul class="reviews">
      <li class="review-item" v-for="review in userRepos.data" :key="review.id">
        <feedbody v-bind:review-object="review" />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import feedbody from '../../../components/feed/feedbody'
import spinner from '../../../components/spinner'

export default {
  components: {
    spinner,
    feedbody
  },
  computed: {
    ...mapState({
      userRepos: state => state.userRepos,
      user: state => state.user.data
    })
  },
  methods: {
    ...mapActions({
      fetchUserRepos: 'userRepos/fetchUserRepos'
    })
  },
  async created () {
    try {
      await this.fetchUserRepos()
      console.log(this.userRepos)
    } catch (error) {
      console.log('err', error)
    }
  }
}
</script>
<style lang="scss" scoped src='./repos.scss'></style>
