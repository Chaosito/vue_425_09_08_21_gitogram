<template>
    <div class="wrapper">
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
        <router-link :to="{ name: user-profile} ">Home</router-link><br>
        <router-view />
    </div>
</template>
<script>
export default {
  props: ['id'],
  methods: {
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
    }
  },
  created () {
    console.log(this.$route)
  }
}
</script>
