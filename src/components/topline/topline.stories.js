import topline from './topline.vue'

export default {
  title: 'Шапка',
  components: {
    topline
  },
  argTypes: {
    headline: {
      control: { type: 'text' }
    },
    content: {
      control: { type: 'text' }
    }
  }
}

export const defaultView = (args) => ({
  components: {
    topline
  },
  data () {
    return { args }
  },
  template: `<topline>
  <template #headline>
    ${args.headline}
  </template>
  <template #content>
    ${args.content}
  </template>
</topline>`
})

defaultView.args = {
  headline: 'Headline',
  content: 'Content'
}

defaultView.story = {
  name: 'Стандартный вид'
}
