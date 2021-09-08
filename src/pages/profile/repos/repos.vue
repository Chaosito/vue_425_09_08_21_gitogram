<template>
    <h1>Repositories</h1>
    <h1>Repositories</h1>
    <h1 style="color:red" v-if="this.userRepos.loading">loading</h1>
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      userRepos: state => state.userRepos
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
