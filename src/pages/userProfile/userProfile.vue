<template>
    <div class="wrapper">
      <h1 @click="runMutation">{{ $store.state.user.foo }}</h1>
        <router-link to="/">Home</router-link><br>
        <router-link to="/stories" v-slot="{ route }">
            <span>{{ route.fullPath }}</span>
        </router-link><br>
        <router-link to="/stories" custom v-slot="{ route, href, navigate }">
            <a :href="href" @click="navigate">{{ route.fullPath }}</a>
        </router-link><br>
        <button @click="goToUser">Go To User</button><br>
        RouteId = {{ $route.params.id }}<br>
        RouteIdFromParams = {{ id }}<br>
        <router-link :to="{ name: 'user-profile', params: { id: 555 }, query: { top: 666, bottom: -5 } }">
            asd
        </router-link><br>
        <router-link :to="{ name: 'user-profile' } ">Home</router-link><br>
        <router-view />
        <button @click="getUser">Get a User</button>
        <div v-if="user.loading">LOADING...</div>
        <div v-else-if="user.error">
          {{ user.error }}
        </div>
        <pre v-else-if="user.data">{{ user.data }}</pre>
        <div>{{ isFemale }}</div>
    </div>
</template>
<script>
// import { mapState, mapActions, mapGetters } from 'vuex'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  props: ['id'],
  computed: {
    ...mapState({
      user: state => state.user.user
    }),
    ...mapGetters({
      isFemale: 'user/getUserIsFemale',
      getBmwUsers: 'user/getBmwUsers',
      getCarUsers: 'user/getCarUsers'
    })
  },
  methods: {
    ...mapActions({
      fetchUser: 'user/fetchUser'
    }),
    ...mapMutations({
      UPDATE_FOO: 'user/UPDATE_FOO'
    }),
    goToUser () {
      this.$router.push('/stories')
      //   this.$router.replace('/stories')
      //   this.$router.go(-1)
      this.$router.push({
        // path: '/user-profile/123',
        name: 'user-profile',
        params: {
          id: 15
        },
        query: {
          news: 10
        }
      })
    },
    runMutation () {
      // this.$store.user.commit('UPDATE_FOO', 'foo2')
      this.UPDATE_FOO('foo3')
    },
    getUser () {
      // this.$store.dispatch('fetchUser')
      this.fetchUser()
    }
  },
  created () {
    // console.log(this.$route)
    // console.log(this.$store.state.foo)
    // this.$store.dispatch('fetchMethod', 'Hello!')
    console.log(this.getBmwUsers)
    console.log(this.getCarUsers('audi'))
  }
}
</script>
