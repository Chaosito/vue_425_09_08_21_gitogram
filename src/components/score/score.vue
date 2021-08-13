<template>
  <div class="score-items">
      <div class="stars-score">
          <div class="icon"><icon name="star" /></div> Star
      </div>
      <div class="score-counter">156k</div>
      <div class="fork-now">
          <div class="icon"><icon name="fork" /></div> Fork
      </div>
      <div class="forked-count">4</div>
  </div>
</template>
<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  }
}
</script>
<style lang="scss" scoped src="./score.scss"></style>
