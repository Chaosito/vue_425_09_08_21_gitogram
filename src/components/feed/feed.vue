<template>
  <div class="feed-head">
    <div class="feed-user-panel">
      <img :src="reviewData.owner.avatar_url" />
      <div class="username">{{ reviewData.owner.login }}</div>
    </div>
  </div>
  <div class="feed-body">
    <feedbody v-bind:review-object="reviewData" />
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
import feedbody from './feedbody'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'feed-item',
  components: {
    comment,
    toggler,
    placeholder,
    feedbody
  },
  props: { reviewData: Object },
  setup (props) {
    const shown = ref(false)
    const store = useStore()

    const toggle = async (isOpened) => {
      shown.value = isOpened
      try {
        await store.dispatch('starred/setRepoIssues', props.reviewData.id)
      } catch (error) {
        console.log('Error when loading starred repositories: ', error)
      }
    }
    return {
      shown,
      toggle
    }
  }
}
</script>
<style lang="scss" scoped src="./feed.scss"></style>
