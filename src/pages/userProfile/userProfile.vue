<template>
    <div class="wrapper">
      <h1 @click="runMutation">{{ $store.state.randomuser.foo }}</h1>
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
        <router-link :to="{ name: 'user-profile' }">Home</router-link><br>
        <router-view />
        <button @click="getUser">Get a User</button>
        <div v-if="randomuser.loading">LOADING...</div>
        <div v-else-if="randomuser.error">
          {{ randomuser.error }}
        </div>
        <pre v-else-if="randomuser.data">{{ randomuser.data }}</pre>
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
      randomuser: state => state.randomuser.randomuser
    }),
    ...mapGetters('randomuser', {
      isFemale: 'getUserIsFemale',
      getBmwUsers: 'getBmwUsers',
      getCarUsers: 'getCarUsers'
    })
  },
  methods: {
    ...mapActions({
      fetchUser: 'randomuser/fetchUser'
    }),
    ...mapMutations({
      UPDATE_FOO: 'randomuser/UPDATE_FOO'
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
      // this.$store.randomuser.commit('UPDATE_FOO', 'foo2')
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
