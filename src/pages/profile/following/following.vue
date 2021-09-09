<template>
  <div class="header">
    <h1>Following</h1>
    <h3>{{ user.data.following }}</h3>
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
import spinner from '../../../components/spinner'
import followingUser from '../../../components/followingUser'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    spinner,
    followingUser
  },
  setup () {
    const store = useStore()
    const user = computed(() => store.state.user)
    onMounted(async () => {
      try {
        await store.dispatch('following/fetchFollowing', { login: user.value.data.login })
      } catch (error) {
        console.log('Error when loading user following: ', error)
      }
    })
    return {
      user,
      following: computed(() => store.state.following)
    }
  }
}
</script>
<style lang="scss" scoped src='./following.scss'></style>
