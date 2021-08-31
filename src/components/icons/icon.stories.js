import * as icons from './variants'
import icon from './icon.vue'

export default {
  title: 'Icons',
  components: {
    icon
  },
  argTypes: {
    iconColor: {
      control: { type: 'color' }
    },
    iconType: {
      options: Object.keys(icons),
      control: {
        type: 'select'
      }
    }
  }
}

export const forkView = (args) => ({
  components: {
    icon
  },
  data () {
    return { args }
  },
  template: `<span class="icon" style=""><icon name="${args.iconType}" style="width:25px; color: ${args.iconColor}" /></span>`
})

forkView.args = {
  iconColor: 'red',
  iconType: 'home'
}

forkView.story = {
  name: 'Icons'
}
