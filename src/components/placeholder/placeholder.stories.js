import placeholder from './placeholder.vue'

export default {
  title: 'Placeholder',
  components: { placeholder },
  argTypes: {
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
  paragraphs: 3
}

defaultView.story = {
  name: 'Placeholder'
}
