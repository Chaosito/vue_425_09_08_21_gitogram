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
        <feed v-bind:review-data="review">
          <template #feedbody>
            <div class="feedbody_popup">
              <div class="review-title">{{ review.name }}</div>
              <div v-html="review.description"></div>
              <score v-bind:review-object="review" @likeClicked="likeClicked" @forkClicked="forkClicked" />
            </div>
          </template>
        </feed>
      </li>
    </ul>
  </div>
</template>
<script>
import StoryUserItem from '../../components/storyUserItem/storyUserItem.vue'
import feed from '../../components/feed/feed.vue'
import score from '../../components/score/score.vue'
import pageHeader from '../../components/pageHeader'

import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'feeds',
  components: {
    StoryUserItem,
    feed,
    score,
    pageHeader
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data,
      user: state => state.user.data,
      starred: state => state.starred.data
    }),
    ...mapGetters({
      isLogged: 'user/isLogged'
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendinigs',
      fetchUser: 'user/fetchUser',
      fetchUserStarred: 'starred/fetchUserStarred',
      logout: 'auth/logout'
    }),
    likeClicked (elId, elLiked) {
      console.log('likeClicked')
      // const curRow = reviews.find(b => b.id === elId)
      // if (curRow) {
      //   curRow.liked = !elLiked
      // }
      // if (!elLiked) {
      //   curRow.likes++
      // } else {
      //   curRow.likes--
      // }
    },
    forkClicked (elId) {
      console.log('forkClicked')
      // const curRow = reviews.find(b => b.id === elId)
      // if (curRow) {
      //   curRow.forks++
      // }
    }
  },
  async created () {
    try {
      await this.fetchTrendings()
      // await this.fetchUser()
      await this.fetchUserStarred({ limit: 10 })
    } catch (error) {
      console.log('err', error)
    }
  }
}
</script>
<style lang="scss" scoped src="./feeds.scss"></style>
