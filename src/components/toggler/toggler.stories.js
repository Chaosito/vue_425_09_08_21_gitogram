import toggler from './toggler.vue'

export default {
  title: 'Toggler',
  components: {
    toggler
  }
}

export const defaultView = () => ({
  components: {
    toggler
  },
  template: '<toggler @onToggle="toggle" />'
})

defaultView.story = {
  name: 'Стандартный вид'
}
