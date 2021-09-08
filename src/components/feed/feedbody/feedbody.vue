<template>
    <div class="feedbody_popup">
      <div class="review-title">{{ reviewObject.name }}</div>
      <div v-html="reviewObject.description"></div>
      <score v-bind:review-object="reviewObject" />
      <!-- <score v-bind:review-object="reviewData" @likeClicked="likeClicked" @forkClicked="forkClicked" /> -->
    </div>
</template>
<script>
import score from '../../score/score.vue'

export default {
  components: {
    score
  },
  props: { reviewObject: Object }
}
</script>

<style lang="scss" scoped src='./feedbody.scss'></style>
