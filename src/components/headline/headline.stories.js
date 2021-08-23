import headline from './headline.vue'
import { action } from '@storybook/addon-actions'

const methods = {
  onChange: action('onChange')
}

export default {
  title: 'Шапка2',
  components: { headline },
  argTypes: {
    content: {
      control: { type: 'text' }
    },
    title: {
      control: { type: 'text' }
    },
    msgText: {
      control: { type: 'text' }
    },
    logoutText: {
      control: { type: 'text' }
    }
  }
}

export const defaultView = (args) => ({
  components: {
    headline
  },
  data () {
    return { args }
  },
  template: `<headline v-bind="args" @change="onChange" :title="args.title"><h3>${args.content}</h3></headline>`,
  methods
})

defaultView.args = {
  title: 'Control panel',
  content: 'Content',
  msgText: 'Сообщения',
  logoutText: 'Выйти'
}

defaultView.story = {
  name: 'Стандартный вид'
}
