import avatar from './avatar.vue'

export default {
  title: 'Пользователь (имя справа)',
  components: {
    avatar
  },
  argTypes: {
    userName: {
      control: { type: 'text' }
    }
  }
}

export const defaultView = (args) => ({
  components: {
    avatar
  },
  data () {
    return { args }
  },
  template: `<avatar title="${args.userName}" src="https://picsum.photos/50/50" alt="User pic" />`
})

defaultView.story = {
  name: 'Стандартный вид'
}

defaultView.args = {
  userName: 'Alice'
}

export const borderedView = (args) => ({
  components: {
    avatar
  },
  data () {
    return { args }
  },
  template: `<avatar title="${args.userName}" src="https://picsum.photos/50/50" alt="User pic" active />`
})

borderedView.args = {
  userName: 'Johnson'
}

borderedView.story = {
  name: 'Граница'
}
