import storyPostItem from './storyPostItem'

export default {
  title: 'storyPostItem',
  components: { storyPostItem },
  argTypes: {
    userName: {
      control: { type: 'text' }
    },
    userPic: {
      control: { type: 'text' }
    },
    active: {
      control: { type: 'boolean' }
    },
    loading: {
      control: { type: 'boolean' }
    },
    followingStatus: {
      control: { type: 'boolean' }
    },
    followingLoading: {
      control: { type: 'boolean' }
    }
  }
}

export const defaultView = (args) => ({
  components: {
    storyPostItem
  },
  data () {
    return {
      args,
      storyData: {
        id: 1,
        userAvatar: args.userPic,
        username: args.userName,
        content: '',
        following: {
          status: args.followingStatus,
          loading: args.followingLoading
        }
      }
    }
  },
  template: `<story-post-item
  :data="storyData"
  :active="args.active"
  :loading="args.loading"
  :buttonsShown="['next', 'prev']"
  />`
})

defaultView.args = {
  userName: 'Alice',
  userPic: 'https://picsum.photos/32/32',
  active: false,
  loading: false,
  followingStatus: true,
  followingLoading: false
}

defaultView.story = {
  name: 'storyPostItem'
}
