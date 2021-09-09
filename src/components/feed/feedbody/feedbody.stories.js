import feedbody from './feedbody.vue'
import score from '../../score/score.vue'

export default {
  title: 'Feedbody',
  components: {
    feedbody,
    score
  }
}

const review = {
  id: 1,
  owner: {
    avatar_url: 'https://cdn1.iconfinder.com/data/icons/web-ui-2/16/UI_Icons_Outline-38-512.png',
    login: 'joshua_l'
  },
  name: 'Vue.js',
  description: '<b>JavaScript</b> framework for building interactive web applications ⚡',
  liked: true,
  stargazers_count: 515,
  forked: true,
  forks: 44,
  date: '15 MAY',
  issues: {
    loading: false,
    data: [
      {
        id: 1,
        username: 'Tony',
        issue_text: 'Comment #1 from vue'
      },
      {
        id: 2,
        username: 'Serj_kek',
        issue_text: 'Issue for vue from serj_kek'
      },
      {
        id: 3,
        username: 'Anonymouse',
        issue_text: 'Another comment'
      }
    ]
  }
}

export const defaultView = () => ({
  components: {
    feedbody,
    score
  },
  data () {
    return {
      review: review
    }
  },
  template: '<feedbody v-bind:review-object="review" />'
})

defaultView.story = {
  name: 'Feedbody'
}
