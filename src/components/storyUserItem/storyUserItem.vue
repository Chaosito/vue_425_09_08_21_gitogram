<template>
  <button class="c-story-user-item" @click="$emit('onPress')" @mouseover="onmover">
    <div class="avatar-wrapper">
      <div class="avatar">
        <img :src="avatar" alt="username avatar" class="img" />
      </div>
    </div>
    <div class="username">{{ username }}</div>
  </button>
</template>
<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped src="./storyUserItem.scss"></style>
