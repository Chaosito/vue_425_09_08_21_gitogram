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
  }
}

export const scoreView = () => ({
  components: {
    score
  },
  template: '<score v-bind:review-object="{id: 11, liked: false, likes:666, forks: 100}" @likeClicked="likeClicked" @forkClicked="forkClicked" />',
  methods
})

scoreView.story = {
  name: 'Стандартный вид'
}

export const scoreLikedView = () => ({
  components: {
    score
  },
  template: '<score v-bind:review-object="{id: 11, liked: true, likes:666, forks: 100}" @likeClicked="likeClicked" @forkClicked="forkClicked" />',
  methods
})

scoreLikedView.story = {
  name: 'Liked'
}
