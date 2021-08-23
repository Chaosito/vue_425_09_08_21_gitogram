<template>
  <div class="score-items">
    <button class="stars-score" v-bind:class="{ active: isLiked }" @click="likeClick">
      <div class="icon"><icon name="star" /></div> Star
    </button>
    <div class="score-counter">{{ likeCount }}</div>
    <button class="fork-now" v-bind="{ forkCount }" @click="forkClick">
      <div class="icon"><icon name="fork" /></div> Fork
    </button>
    <div class="forked-count">{{ forkCount }}</div>
  </div>
</template>
<script>
import icon from '../icons'

export default {
  components: {
    icon
  },
  data () {
    return {
      thisActiveVal: this.reviewObject.liked,
      thisLikesCount: this.reviewObject.likes,
      thisForksCount: this.reviewObject.forks
    }
  },
  mounted: function () {
    // console.log(this.reviewObject)
  },
  props: { reviewObject: Object },
  computed: {
    isLiked () {
      return this.thisActiveVal
    },
    likeCount () {
      return (this.thisLikesCount >= 1000 ? Math.floor(this.thisLikesCount / 1000) + 'k' : this.thisLikesCount)
    },
    forkCount () {
      return (this.thisForksCount >= 1000 ? Math.floor(this.thisForksCount / 1000) + 'k' : this.thisForksCount)
    }
  },
  methods: {
    likeClick () {
      // console.log('like clicked', this.reviewObject.id)
      this.thisActiveVal = !this.thisActiveVal

      if (this.thisActiveVal) {
        this.thisLikesCount++
      } else {
        this.thisLikesCount--
      }

      this.$emit('likeClicked', this.reviewObject.id, this.reviewObject.liked)
    },
    forkClick () {
      // console.log('fork clicked')
      this.thisForksCount++
      this.$emit('forkClicked', this.reviewObject.id)
    }
  }
}
</script>
<style lang="scss" scoped src="./score.scss"></style>
