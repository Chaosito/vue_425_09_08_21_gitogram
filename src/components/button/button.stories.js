import button from './button.vue'

export default {
  title: 'Button',
  component: { button },
  argTypes: {
    text: {
      control: { type: 'text' }
    },
    loading: {
      control: { type: 'boolean' }
    },
    onClick: {
      action: 'onClick',
      description: 'At end progressbar animation'
    }
  }
}

export const buttonView = (args) => ({
  components: { xButton: button },
  data () {
    return { args }
  },
  template: `<x-button v-bind="args" @onClick="args.onClick">${args.text}</x-button>`
})

buttonView.args = { text: 'Following', loading: false }
buttonView.story = { name: 'Button' }
