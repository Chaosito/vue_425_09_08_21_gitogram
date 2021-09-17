<template>
  <div class="c-header" :class="[`theme-${theme}`]">
    <div class="x-container">
      <div class="headline">
        <div class="topline-logo">
          <button class="logo" @click="$router.push('/')">
            <logo :color="theme === 'black' ? 'white' : 'black'" />
          </button>
        </div>
        <div class="topline-icons">
          <slot name="header-user-icons">
            <router-link :to="{ name: 'root' } "><div class="icon"><icon name="home" /></div></router-link>
            <router-link :to="{ name: 'profile' } "><div alt="User avatar" class="icon"><img :src="isLogged ? this.user.avatar_url : 'https://picsum.photos/32/32'" style="border-radius:50%;" /></div></router-link>
            <a @click="logout" href="#"><div class="icon"><icon name="logout" /></div></a>
          </slot>
        </div>
      </div>
      <div class="content" v-if="$slots.content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
<script>
import icon from '../icons'
import logo from '../../components/logo'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'pageHeader',
  components: {
    logo,
    icon
  },
  props: {
    theme: { type: String }
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
<style lang="scss" src="./pageHeader.scss" scoped></style>
