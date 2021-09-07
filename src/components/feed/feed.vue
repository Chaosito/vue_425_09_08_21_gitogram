<template>
  <div class="feed-head">
    <div class="feed-user-panel">
      <img :src="reviewData.owner.avatar_url" />
      <div class="username">{{ reviewData.owner.login }}</div>
    </div>
  </div>
  <div class="feed-body">
    <div class="feedbody_popup">
      <div class="review-title">{{ reviewData.name }}</div>
      <div v-html="reviewData.description"></div>
      <score v-bind:review-object="reviewData" />
      <!-- <score v-bind:review-object="reviewData" @likeClicked="likeClicked" @forkClicked="forkClicked" /> -->
    </div>
    <div class="c-feed">
        <toggler @onToggle="toggle" />
        <div class="comments" v-if="shown">
            <ul class="comments-list">
              <placeholder :paragraphs="1" v-if="reviewData.issues.loading" />
              <li class="comments-item" v-else v-for="issue in reviewData.issues.data" :key="issue.id">
                <comment :text="issue.title" :username="issue.user.login" />
              </li>
            </ul>
        </div>
    </div>
  </div>
  <div class="feed-footer">{{ reviewData.created_at }}</div>
</template>
<script>
import comment from '../comment'
import toggler from '../toggler'
import placeholder from '../placeholder'
import score from '../../components/score/score.vue'

import { mapActions } from 'vuex'
export default {
  name: 'feed-item',
  components: {
    comment,
    toggler,
    score,
    placeholder
  },
  data () {
    return {
      shown: false
    }
  },
  props: { reviewData: Object },
  methods: {
    ...mapActions({
      setRepoIssues: 'starred/setRepoIssues'
    }),
    async toggle (isOpened) {
      this.shown = isOpened
      await this.setRepoIssues(this.reviewData.id)
    }
  }
}
</script>
<style lang="scss" scoped src="./feed.scss"></style>
