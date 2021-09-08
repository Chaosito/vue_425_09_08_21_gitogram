<template>
  <div class="header">
    <h1>Following</h1>
    <h3>{{ user.following }}</h3>
  </div>
  <div class="loader" v-if="following.loading">
    <spinner />
  </div>
  <div v-else>
    <ul class="user-following">
      <li v-for="user in following.data" :key="user.id">
        <following-user v-bind:user-object="user" />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import spinner from '../../../components/spinner'
import followingUser from '../../../components/followingUser'

export default {
  components: {
    spinner,
    followingUser
  },
  computed: {
    ...mapState({
      user: state => state.user.data,
      following: state => state.following
    })
  },
  methods: {
    ...mapActions({
      fetchFollowing: 'following/fetchFollowing'
    })
  },
  async created () {
    try {
      await this.fetchFollowing({ login: this.user.login })
    } catch (error) {
      console.log('err', error)
    }
  }
}
</script>
<style lang="scss" scoped src='./following.scss'></style>
