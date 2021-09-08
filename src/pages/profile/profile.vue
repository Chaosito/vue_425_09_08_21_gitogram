<template>
  <page-header />
  <div class="x-container profile-screen">
    <div class="left-side">
      <h1>My profile</h1>
      <div class="user-component">
        <div class="userpic">
          <img :src="user.avatar_url" />
        </div>
        <div class="userinfo">
          <h2>{{ user.login }}</h2>
          <div class="info">54 <span>reposts</span> 834 <a href="#">watchers</a></div>
          <div class="username">{{ user.name }}</div>
        </div>
      </div>
      <div class="left-profile-links">
        <h1>Links</h1>
        <router-link :to="{ name: 'profile-repos' }">Repositories</router-link><br>
        <router-link :to="{ name: 'profile-following' }">Following</router-link>
      </div>
    </div>
    <div class="right-side">
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import pageHeader from '../../components/pageHeader'

export default {
  name: 'feeds',
  components: {
    pageHeader
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    }),
    ...mapGetters({
      isLogged: 'user/isLogged'
    })
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  },
  async mounted () {
    console.log(this.user)
  }
}
</script>
<style lang="scss" scoped src="./profile.scss"></style>
