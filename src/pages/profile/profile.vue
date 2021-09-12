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
          <div class="info">
            {{ user.followers }} <span>followers</span>
            {{ user.following }} <router-link :to="{ name: 'profile-following' }">following</router-link></div>
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
import pageHeader from '../../components/pageHeader'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'feeds',
  components: {
    pageHeader
  },
  setup () {
    const store = useStore()
    return {
      user: computed(() => store.state.user.data)
    }
  }
}
</script>
<style lang="scss" scoped src="./profile.scss"></style>
