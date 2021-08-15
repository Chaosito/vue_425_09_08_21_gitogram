<template>
  <div class="score-items">
      <div class="stars-score" v-bind:class="{ active: reviewObject.liked === true }" @click="likeClick">
          <div class="icon"><icon name="star" /></div> Star
      </div>
      <div class="score-counter">{{ reviewObject.likes }}</div>
      <div class="fork-now" @click="forkClick">
          <div class="icon"><icon name="fork" /></div> Fork
      </div>
      <div class="forked-count">{{ reviewObject.forks }}</div>
  </div>
</template>
<script>
import { icon } from '../icons'

export default {
  components: {
    icon
  },
  mounted: function () {
    // console.log(this.reviewObject)
  },
  props: { reviewObject: Object },
  methods: {
    likeClick () {
      // console.log('like clicked', this.reviewObject.id)
      this.$emit('likeClicked', this.reviewObject.id, this.reviewObject.liked)
    },
    forkClick () {
      // console.log('fork clicked')
      this.$emit('forkClicked', this.reviewObject.id)
    }
  }
}
</script>
<style lang="scss" scoped src="./score.scss"></style>
