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
          <div class="icon"><a href="#home"><icon name="home" /></a></div>
          <div class="icon"><a href="#profile"><img src="https://cdn1.iconfinder.com/data/icons/web-ui-2/16/UI_Icons_Outline-38-512.png" /></a></div>
          <div class="icon"><a href="#logout"><icon name="logout" /></a></div>
        </div>
      </template>
    </topline>
  </div>
  <div class="user-feeds">
    <x-button @click="getUser">asd</x-button>
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
