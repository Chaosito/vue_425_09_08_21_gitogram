import placeholder from './placeholder.vue'

export default {
  title: 'Placeholder',
  components: { placeholder },
  argTypes: {
    images: {
      control: { type: 'number' }
    },
    paragraphs: {
      control: { type: 'number' }
    }
  }
}

export const defaultView = (args) => ({
  components: {
    placeholder
  },
  data () {
    return { args }
  },
  template: '<placeholder v-bind="args" />'
})

defaultView.args = {
  images: 2,
  paragraphs: 3
}

defaultView.story = {
  name: 'Placeholder'
}
