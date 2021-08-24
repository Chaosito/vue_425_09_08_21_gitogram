<template>
  <!--<div class="c-comment">
    <p>
      <span class="username">{{ username }}</span>
      <span class="comment-text" v-html="text"></span>
    </p>
  </div>-->
  <div class="c-slider">
      <progressbar />
      <topline>
        <template #headline>
          <div class="topline-logo">
            <avatar title="React.reposit" :size="32" src="https://picsum.photos/32/32" alt="User pic" />
          </div>
        </template>
      </topline>
      <div class="slider-content">
        <slot name="slider-content">Content</slot>
      </div>
      <div class="slider-bottom">
        <x-button>follow</x-button>
      </div>
  </div>
</template>

<script>
import progressbar from '../progressbar/progressbar.vue'
import topline from '../topline'
import avatar from '../avatar/avatar.vue'
import button from '../button'

export default {
  name: 'Slider',
  components: {
    progressbar,
    topline,
    avatar,
    xButton: button
  },
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
<style lang="scss" src='./slider.scss'></style>
