import comment from './comment'

export default {
  title: 'comment',
  components: { comment },
  argTypes: {
    username: {
      control: { type: 'text' }
    },
    text: {
      control: { type: 'text' }
    }
  }
}

export const commentView = (args) => ({
  components: {
    comment
  },
  data () {
    return { args }
  },
  template: '<comment :text="args.text" :username="args.username" />'
})

commentView.args = {
  username: 'UserName',
  text: 'User comment'
}

commentView.story = {
  name: 'Стандартный вид'
}
