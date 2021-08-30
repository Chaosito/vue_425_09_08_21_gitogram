import storyPostItem from './storyPostItem'

export default {
  title: 'storyPostItem',
  components: { storyPostItem }
}

export const defaultView = (args) => ({
  components: {
    storyPostItem
  },
  data () {
    return { args }
  },
  template: `
  <story-post-item active />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
