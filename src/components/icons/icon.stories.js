import icon from './icon.vue'

export default {
  title: 'Icons',
  components: {
    icon
  },
  argTypes: {
    iconColor: {
      control: { type: 'color' }
    }
  }
}

export const forkView = (args) => ({
  components: {
    icon
  },
  data () {
    return { args }
  },
  template: `<span class="icon" style=""><icon name="fork" style="width:25px; color: ${args.iconColor}" /></span>`
})

forkView.args = {
  iconColor: 'red'
}

forkView.story = {
  name: 'Fork'
}

export const homeView = (args) => ({
  components: {
    icon
  },
  data () {
    return { args }
  },
  template: `<span class="icon" style=""><icon name="home" style="width:25px; color: ${args.iconColor}" /></span>`
})

homeView.args = {
  iconColor: 'black'
}

homeView.story = {
  name: 'Home'
}

export const logoutView = (args) => ({
  components: {
    icon
  },
  data () {
    return { args }
  },
  template: `<span class="icon" style=""><icon name="logout" style="width:25px; color: ${args.iconColor}" /></span>`
})

logoutView.args = {
  iconColor: 'green'
}

logoutView.story = {
  name: 'Logout'
}

export const starView = (args) => ({
  components: {
    icon
  },
  data () {
    return { args }
  },
  template: `<span class="icon" style=""><icon name="star" style="width:25px; color: ${args.iconColor}" /></span>`
})

starView.args = {
  iconColor: 'blue'
}

starView.story = {
  name: 'Star'
}

export const triangleView = (args) => ({
  components: {
    icon
  },
  data () {
    return { args }
  },
  template: `<span class="icon" style=""><icon name="triangle" style="width:25px; color: ${args.iconColor}" /></span>`
})

triangleView.args = {
  iconColor: 'pink'
}

triangleView.story = {
  name: 'Triangle'
}

export const closeView = (args) => ({
  components: {
    icon
  },
  data () {
    return { args }
  },
  template: `<span class="icon" style=""><icon name="close" style="width:25px; color: ${args.iconColor}" /></span>`
})

closeView.args = {
  iconColor: 'black'
}

closeView.story = {
  name: 'Close'
}

export const spinView = (args) => ({
  components: {
    icon
  },
  data () {
    return { args }
  },
  template: `<span class="icon" style=""><icon name="spin" style="width:25px; color: ${args.iconColor}" /></span>`
})

spinView.args = {
  iconColor: 'black'
}

spinView.story = {
  name: 'Spin'
}
