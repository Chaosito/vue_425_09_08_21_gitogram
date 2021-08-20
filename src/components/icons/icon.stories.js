import icon from './icon.vue'

export default {
  title: 'Icon',
  components: {
    icon
  }
}

export const forkView = () => ({
  components: {
    icon
  },
  template: '<span class="icon"><icon name="fork" /></span>'
})

forkView.story = {
  name: 'Fork'
}

export const homeView = () => ({
  components: {
    icon
  },
  template: '<span class="icon"><icon name="home" /></span>'
})

homeView.story = {
  name: 'Home'
}

export const logoutView = () => ({
  components: {
    icon
  },
  template: '<span class="icon"><icon name="logout" /></span>'
})

logoutView.story = {
  name: 'Logout'
}

export const starView = () => ({
  components: {
    icon
  },
  template: '<span class="icon"><icon name="star" /></span>'
})

starView.story = {
  name: 'Star'
}

export const triangleView = () => ({
  components: {
    icon
  },
  template: '<span class="icon"><icon name="triangle" /></span>'
})

triangleView.story = {
  name: 'Triangle'
}
