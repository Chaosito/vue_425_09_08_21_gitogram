import avatar from './avatar.vue'

export default {
  title: 'Пользователь (имя справа)',
  components: {
    avatar
  },
  argTypes: {
    userName: {
      control: { type: 'text' }
    },
    size: {
      control: { type: 'number' }
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
  template: `<avatar title="${args.userName}" size="${args.size}" src="https://picsum.photos/${args.size}/${args.size}" alt="User pic" />`
})

defaultView.args = {
  userName: 'Alice',
  size: 50
}

defaultView.story = {
  name: 'Стандартный вид'
}

export const borderedView = (args) => ({
  components: {
    avatar
  },
  data () {
    return { args }
  },
  template: `<avatar title="${args.userName}" size="${args.size}" src="https://picsum.photos/${args.size}/${args.size}" alt="User pic" active />`
})

borderedView.args = {
  userName: 'Johnson',
  size: 50
}

borderedView.story = {
  name: 'Граница'
}
