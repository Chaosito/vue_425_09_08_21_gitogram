import button from './button.vue'

export default {
  title: 'Button',
  component: { button },
  argTypes: {
    text: {
      control: { type: 'text' }
    },
    hoverText: {
      control: { type: 'text' }
    }
  }
}

export const buttonView = (args) => ({
  components: { xButton: button },
  data () {
    return { args }
  },
  template: `<x-button v-bind="args">${args.text}</x-button>`
})

buttonView.args = {
  text: 'Following',
  hoverText: 'UnfollowMe'
}

buttonView.story = {
  name: 'Button'
}
