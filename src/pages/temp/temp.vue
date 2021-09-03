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
      console.log('ok go')
      try {
        const response = await fetch('https://api.github.com/user', {
          headers: {
            Authorization: `token ${localStorage.getItem('token')}`
          }
        })
        const data = await response.json()
        console.log(data)
      } catch (e) {
        console.log(e)
      }
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
