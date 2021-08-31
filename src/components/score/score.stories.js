import score from './score.vue'
import { action } from '@storybook/addon-actions'

const methods = {
  likeClicked: action('likeClicked'),
  forkClicked: action('forkClicked')
}

export default {
  title: 'Score',
  components: {
    score
  },
  argTypes: {
    liked: {
      control: { type: 'boolean' }
    },
    likes: {
      control: { type: 'number' }
    },
    forks: {
      control: { type: 'number' }
    }
  }
}

export const defaultView = (args) => ({
  components: {
    score
  },
  data () {
    return { args }
  },
  template: `<score v-bind:review-object="{id: 11, liked: ${args.liked}, likes:${args.likes}, forks: ${args.forks}}" @likeClicked="likeClicked" @forkClicked="forkClicked" />`,
  methods
})

defaultView.args = {
  liked: false,
  likes: 100,
  forks: 200
}

export const scoreLikedView = (args) => ({
  components: {
    score
  },
  data () {
    return { args }
  },
  template: `<score v-bind:review-object="{id: 11, liked: ${args.liked}, likes:${args.likes}, forks: ${args.forks}}" @likeClicked="likeClicked" @forkClicked="forkClicked" />`,
  methods
})

scoreLikedView.args = {
  liked: true,
  likes: 300,
  forks: 400
}

scoreLikedView.story = {
  name: 'Liked'
}
