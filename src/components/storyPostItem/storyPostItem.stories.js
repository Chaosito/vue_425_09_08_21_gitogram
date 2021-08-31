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
    }
  }
}

export const defaultView = (args) => ({
  components: {
    storyPostItem
  },
  data () {
    return { args }
  },
  template: `<story-post-item :data="{
    id: 1,
    userAvatar: '${args.userPic}',
    username: '${args.userName}',
    content: ''
  }" :active='${args.active}' />`
})

defaultView.args = {
  userName: 'Alice',
  userPic: 'https://picsum.photos/32/32',
  active: true
}

defaultView.story = {
  name: 'Стандартный вид'
}
