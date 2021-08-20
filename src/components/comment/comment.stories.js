import comment from './comment'

export default {
  title: 'comment',
  components: { comment }
}

export const commentView = () => ({
  components: {
    comment
  },
  template: '<comment text="Example of user comment" username="Username" />'
})

commentView.story = {
  name: 'Стандартный вид'
}
