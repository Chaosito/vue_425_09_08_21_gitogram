import headline from './headline.vue'
import { action } from '@storybook/addon-actions'

const methods = {
  onChange: action('onChange')
}

export default {
  title: 'headline',
  components: { headline }
}

export const defaultView = () => ({
  components: {
    headline
  },
  template: '<headline @change="onChange" title="Control panel"><h3>Content</h3></headline>',
  methods
})

defaultView.story = {
  name: 'Стандартный вид'
}
