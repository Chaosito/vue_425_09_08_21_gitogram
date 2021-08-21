import toggler from './toggler.vue'

export default {
  title: 'Toggler',
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
  template: '<toggler @onToggle="toggle" />'
})

defaultView.args = {
  isOpened: false
}

defaultView.story = {
  name: 'Стандартный вид'
}
