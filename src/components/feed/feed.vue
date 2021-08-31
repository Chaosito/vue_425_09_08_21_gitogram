<template>
  <div class="feed-head">
    <div class="feed-user-panel">
      <img :src="reviewData.userpic" />
      <div class="username">{{ reviewData.username }}</div>
    </div>
  </div>
  <div class="feed-body">
    <slot name="feedbody"></slot>
    <div class="c-feed">
        <toggler @onToggle="toggle" />
        <div class="comments" v-if="shown">
            <ul class="comments-list">
              <li class="comments-item" v-for="issue in reviewData.issues" :key="issue.id">
                <comment :text="issue.issue_text" :username="issue.username" />
              </li>
            </ul>
        </div>
    </div>
  </div>
  <div class="feed-footer">{{ reviewData.date }}</div>
</template>
<script>
import comment from '../comment'
import toggler from '../toggler'

export default {
  name: 'feed-item',
  components: {
    comment,
    toggler
  },
  data () {
    return {
      shown: false
    }
  },
  props: { reviewData: Object },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>
<style lang="scss" scoped src="./feed.scss"></style>
