<template>
  <div class="feed-head">
    <div class="feed-user-panel">
      <img :src="reviewData.owner.avatar_url" />
      <div class="username">{{ reviewData.owner.login }}</div>
    </div>
  </div>
  <div class="feed-body">
    <feedbody v-bind:review-object="reviewData" />
    <issues :loading="reviewData.issues.loading" :issues="reviewData.issues.data" @loadContent="loadIssues" />
  </div>
  <div class="feed-footer">{{ reviewData.created_at }}</div>
</template>
<script>
import feedbody from './feedbody'
import { useStore } from 'vuex'
import issues from '../issues'

export default {
  name: 'feed-item',
  components: {
    feedbody,
    issues
  },
  props: { reviewData: Object },
  setup (props) {
    const store = useStore()
    const loadIssues = async () => {
      try {
        await store.dispatch('starred/setRepoIssues', props.reviewData.id)
      } catch (error) {
        console.log('Error when loading starred repositories: ', error)
      }
    }

    return {
      loadIssues
    }
  }
}
</script>
<style lang="scss" scoped src="./feed.scss"></style>
