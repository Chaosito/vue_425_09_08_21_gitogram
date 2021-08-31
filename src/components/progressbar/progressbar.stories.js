import progressbar from '../../components/progressbar/progressbar.vue'

export default {
  title: 'Progressbar',
  component: progressbar,
  argTypes: {
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
  template: '<progressbar @onFinish="args.onFinish" />'
})

defaultView.story = {
  name: 'Progressbar'
}
