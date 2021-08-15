<template>
  <div class="c-comment">
    <p>
      <span class="username">{{ username }}</span>
      <span class="comment-text" v-html="text"></span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    username: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped src='./comment.scss'></style>
