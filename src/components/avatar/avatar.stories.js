import avatar from './avatar.vue'

export default {
  title: 'Avatar',
  components: {
    avatar
  }
}

export const defaultView = () => ({
  components: {
    avatar
  },
  template: '<avatar title="User Name" src="https://picsum.photos/50/50" alt="User pic" />'
})

defaultView.story = {
  name: 'Стандартный вид'
}

export const borderedView = () => ({
  components: {
    avatar
  },
  template: '<avatar title="User Name" src="https://picsum.photos/50/50" alt="User pic" active />'
})

borderedView.story = {
  name: 'Граница'
}

export const nonDefaultView = () => ({
  template: `
    <h1 style="color:red;">Hello2!</h1>
    `
})

nonDefaultView.story = {
  name: 'Нестандартный вид'
}
