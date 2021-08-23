import topline from './topline.vue'

export default {
  title: 'Шапка',
  components: {
    topline
  }
}

export const defaultView = () => ({
  components: {
    topline
  },
  template: `<topline>
  <template #headline>
    Headline
  </template>
  <template #content>
    Content
  </template>
</topline>`
})

defaultView.story = {
  name: 'Стандартный вид'
}
