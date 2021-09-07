import logo from './logo.vue'

export default {
  title: 'Logo',
  components: {
    logo
  },
  argTypes: {
    color: {
      control: { type: 'color' }
    }
  }
}

export const logoView = (args) => ({
  components: {
    logo
  },
  data () {
    return { args }
  },
  template: `<logo color="${args.color}" />`
})

logoView.args = {
  color: 'orange'
}

logoView.story = {
  name: 'Logo'
}
