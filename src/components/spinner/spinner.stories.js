import spinner from './spinner.vue'

export default {
  title: 'Spinner',
  components: {
    spinner
  }
}

export const spinnerView = () => ({
  components: {
    spinner
  },
  template: '<spinner />'
})

spinnerView.story = {
  name: 'Spinner'
}
