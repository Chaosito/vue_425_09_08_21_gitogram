import progressbar from '../../components/progressbar/progressbar.vue'

export default {
  title: 'Progressbar',
  component: progressbar,
  argTypes: {
    active: {
      control: { type: 'boolean' }
    },
    onFinish: {
      action: 'onFinish',
      description: 'At end progressbar animation'
    }
  }
}

export const defaultView = (args) => ({
  components: {
    progressbar
  },
  data () {
    return { args }
  },
  template: '<progressbar :active="args.active" @onFinish="args.onFinish" />'
})

defaultView.args = {
  active: false
}

defaultView.story = {
  name: 'Progressbar'
}
