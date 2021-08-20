import button from './button.vue'

export default {
  title: 'button',
  component: { button },
  argTypes: {
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
  template: '<x-button v-bind="args">Following</x-button>'
})

buttonView.args = {
  hoverText: 'UnfollowMe'
}

buttonView.story = {
  name: 'Стандартный вид'
}
