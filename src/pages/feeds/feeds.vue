<template>
  <page-header>
    <template #content>
      <ul class="stories">
        <li class="stories-item" v-for="trending in getUnstarredOnly" :key="trending.id">
          <story-user-item
            :avatar="trending.owner.avatar_url"
            :username="trending.owner.login"
            @onPress="$router.push({name: 'stories', params: {initialSlide: trending.id}})"
          />
        </li>
      </ul>
    </template>
  </page-header>
  <div class="user-feeds">
    <ul class="reviews">
      <li class="review-item" v-for="review in starred" :key="review.id">
        <feed v-bind:review-data="review" />
      </li>
    </ul>
  </div>
</template>
<script>
import StoryUserItem from '../../components/storyUserItem/storyUserItem.vue'
import feed from '../../components/feed/feed.vue'
import pageHeader from '../../components/pageHeader'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'feeds',
  components: {
    StoryUserItem,
    feed,
    pageHeader
  },
  computed: {
    ...mapState({
      starred: state => state.starred.data
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendinigs',
      fetchUserStarred: 'starred/fetchUserStarred'
    })
  },
  async created () {
    try {
      await this.fetchTrendings()
      await this.fetchUserStarred({ limit: 10 })
    } catch (error) {
      console.log('err', error)
    }
  }
}
</script>
<style lang="scss" scoped src="./feeds.scss"></style>
