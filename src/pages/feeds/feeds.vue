<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="topline-logo">
          <button class="logo" @click="$router.push('/')">
              <logo color="black" />
          </button>
        </div>
        <div class="topline-icons">
          <div class="icon"><router-link :to="{ name: 'root' } "><icon name="home" /></router-link></div>
          <div :title="this.user?.login" alt="User avatar" class="icon"><router-link :to="{ name: 'auth' } "><img :src="this.user?.avatar_url" style="border-radius:50%;" /></router-link></div>
          <div class="icon"><a @click="logout" href="#"><icon name="logout" /></a></div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item"  v-for="trending in trendings" :key="trending.id">
            <story-user-item
              :avatar="trending.owner.avatar_url"
              :username="trending.owner.login"
              @onPress="$router.push({name: 'stories', params: {initialSlide: trending.id}})"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="user-feeds">
    <ul class="reviews">
      <!-- <h1 v-for="review in starred" :key="review.id">{{ review.id }}</h1> -->

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

      <!-- <li class="review-item" v-for="review in reviews" :key="review.id">
        <feed v-bind:review-data="review">
          <template #feedbody>
            <div class="feedbody_popup">
              <div class="review-title">{{ review.review_title }}</div>
              <div v-html="review.review_desc"></div>
              <score v-bind:review-object="review" @likeClicked="likeClicked" @forkClicked="forkClicked" />
            </div>
          </template>
        </feed>
      </li> -->

    </ul>
  </div>
</template>
<script>
import StoryUserItem from '../../components/storyUserItem/storyUserItem.vue'
import topline from '../../components/topline'
import icon from '../../components/icons'
import feed from '../../components/feed/feed.vue'
import score from '../../components/score/score.vue'
// import reviews from './reviews.json'
import logo from '../../components/logo'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    StoryUserItem,
    feed,
    score,
    logo
  },
  data () {
    return {
      // reviews,
      items: []
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data,
      user: state => state.user.data,
      starred: state => state.starred.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendinigs',
      fetchUser: 'user/fetchUser',
      fetchUserStarred: 'starred/fetchUserStarred'
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
    },
    logout () {
      // console.log('logout')
      localStorage.removeItem('token')
      window.location.reload()
    }
  },
  async created () {
    try {
      await this.fetchTrendings()
      await this.fetchUser()
      await this.fetchUserStarred({ limit: 10 })
      console.log(this.starred)
      // console.log(this.user.login)
    } catch (error) {
      console.log('err', error)
    }
  }
}
</script>
<style lang="scss" scoped src="./feeds.scss"></style>
