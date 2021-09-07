<template>
  <page-header />
  <div class="x-container">
    asd
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
  }
}
</script>
<style lang="scss" scoped src="./profile.scss"></style>
