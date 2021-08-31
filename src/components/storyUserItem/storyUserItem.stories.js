import StoryUserItem from '../../components/storyUserItem/storyUserItem.vue'

import { action } from '@storybook/addon-actions'

const methods = {
  handlePress: action('handlePress')
}

export default {
  title: 'storyUserItem',
  components: {
    StoryUserItem
  },
  argTypes: {
    userName: {
      control: { type: 'text' }
    }
  }
}

export const defaultView = (args) => ({
  components: {
    StoryUserItem
  },
  data () {
    return { args }
  },
  template: `<story-user-item
    avatar="https://picsum.photos/200/200"
    username="${args.userName}"
    @onPress="handlePress(404)"
    />`,
  methods
})

defaultView.args = {
  userName: 'Alice'
}

defaultView.story = {
  name: 'storyUserItem'
}
