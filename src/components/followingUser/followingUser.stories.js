import followingUser from './followingUser.vue'

export default {
  title: 'followingUser',
  components: {
    followingUser
  }
}

const user = {
  avatar_url: 'https://cdn1.iconfinder.com/data/icons/web-ui-2/16/UI_Icons_Outline-38-512.png',
  login: 'joshua_l',
  type: 'Admin'
}

export const defaultView = () => ({
  components: {
    followingUser
  },
  data () {
    return {
      user: user
    }
  },
  template: '<following-user v-bind:user-object="user" />'
})

defaultView.story = {
  name: 'followingUser'
}
