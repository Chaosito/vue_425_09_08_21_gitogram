import pageHeader from './pageHeader.vue'

export default {
  title: 'PageHeader',
  components: {
    pageHeader
  },
  argTypes: {
    headlineIconsZone: {
      control: { type: 'text' }
    },
    content: {
      control: { type: 'text' }
    }
  }
}

export const defaultView = (args) => ({
  components: {
    pageHeader
  },
  data () {
    return { args }
  },
  template: `<page-header>
  <template #header-user-icons>
    ${args.headlineIconsZone}
  </template>
  <template #content>
    ${args.content}
  </template>
</page-header>`
})

defaultView.args = {
  headlineIconsZone: '',
  content: 'Content'
}

defaultView.story = {
  name: 'PageHeader'
}
