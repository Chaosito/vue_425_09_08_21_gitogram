<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="topline-logo">
          <button class="logo" @click="$router.push('/')">
            <logo color="black" />
          </button>
        </div>
        <div class="topline-icons">
          <div class="icon"><router-link :to="{ name: 'root' } "><icon name="home" /></router-link></div>
          <div :title="this.user?.login" alt="User avatar" class="icon"><router-link :to="{ name: 'auth' } "><img :src="this.user?.avatar_url" style="border-radius:50%;" /></router-link></div>
          <div class="icon"><a @click="logout" href="#"><icon name="logout" /></a></div>
        </div>
      </template>
    </topline>
  </div>
  <div class="user-feeds">
    <x-button
    disabled
    @click="$emit('onFollow')"
    >asd</x-button>
  </div>
</template>
<script>
import topline from '../../components/topline'
import icon from '../../components/icons'
import logo from '../../components/logo'
import { mapActions, mapState } from 'vuex'
import button from '../../components/button'
import * as api from '../../api'

export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    logo,
    xButton: button
  },
  data () {
    return {
      items: []
    }
  },
  emits: ['onFollow'],
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendinigs'
    }),
    async getUser () {
      const data = await api.user.getUser()
      console.log('api', data)
    }
  },
  async created () {
    // try {
    //   await this.fetchTrendings()
    // } catch (error) {
    //   console.log('err', error)
    // }
  }
}
</script>
<style lang="scss" scoped src="./temp.scss"></style>
