import toggler from './toggler.vue'

export default {
  title: 'Переключатель комментариев',
  components: {
    toggler
  },
  argTypes: {
    isOpened: {
      control: { type: 'boolean' }
    }
  }
}

export const defaultView = (args) => ({
  components: {
    toggler
  },
  data () {
    return { args }
  },
  template: `<toggler v-bind:is-opened="${args.isOpened}" @onToggle="toggle" />`
})

defaultView.args = {
  isOpened: false
}

defaultView.story = {
  name: 'Стандартный вид'
}
