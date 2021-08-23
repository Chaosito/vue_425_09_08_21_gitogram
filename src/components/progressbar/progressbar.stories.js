import progressbar from '../../components/progressbar/progressbar.vue'

export default {
  title: 'Прогрессбар',
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
  name: 'Стандартный вид'
}
