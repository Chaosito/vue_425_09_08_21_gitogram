<template>
  <div class="header">
    <h1>Repositories</h1>
    <h3>{{ user.public_repos }}</h3>
  </div>
  <div class="loader" v-if="userRepos.loading">
    <spinner />
  </div>
  <div v-else>
    <ul class="reviews">
      <li class="review-item" v-for="review in userRepos.data" :key="review.id">
        <feedbody v-bind:review-object="review" />
      </li>
    </ul>
  </div>
</template>
<script>
import feedbody from '../../../components/feed/feedbody'
import spinner from '../../../components/spinner'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  components: { spinner, feedbody },
  setup () {
    const store = useStore()
    onMounted(async () => {
      try {
        await store.dispatch('userRepos/fetchUserRepos')
      } catch (error) {
        console.log('Error when loading user repositories: ', error)
      }
    })

    return {
      user: computed(() => store.state.user.data),
      userRepos: computed(() => store.state.userRepos)
    }
  }
}
</script>
<style lang="scss" scoped src='./repos.scss'></style>
