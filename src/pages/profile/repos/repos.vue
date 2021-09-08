<template>
  <div class="header" style="display: flex;align-items: center;justify-content: space-between;">
    <h1>Repositories</h1>
    <h3 style="font-size: 18px; color:gray">{{ user.public_repos }}</h3>
  </div>
  <div class="loader" v-if="userRepos.loading" style="color: #31AE54; display: flex; justify-content: center;">
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
