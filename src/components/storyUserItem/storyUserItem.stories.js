import StoryUserItem from '../../components/storyUserItem/storyUserItem.vue'

import { action } from '@storybook/addon-actions'

const methods = {
  handlePress: action('handlePress')
}

export default {
  title: 'StoryUserItem',
  components: {
    StoryUserItem
  }
}

export const defaultView = () => ({
  components: {
    StoryUserItem
  },
  template: `<story-user-item
    avatar="https://picsum.photos/200/200"
    username="Alice"
    @onPress="handlePress(404)"
    />`,
  methods
})

defaultView.story = {
  name: 'Стандартный вид'
}
