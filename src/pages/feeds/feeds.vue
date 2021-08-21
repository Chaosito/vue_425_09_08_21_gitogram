<template>
  <headline title='title' msg-text='Сообщения' logout-text='Выйти'><avatar title="User Name" src="https://picsum.photos/50/50" alt="User pic" /></headline>

  <div class="topline">
    <topline>
      <template #headline>
        <div class="topline-logo">
          <img alt="Gitogram logo" src="../../assets/gitogram_logo.png" />
        </div>
        <div class="topline-icons">
          <div class="icon"><a href="#home"><icon name="home" /></a></div>
          <div class="icon"><a href="#profile"><img src="https://cdn1.iconfinder.com/data/icons/web-ui-2/16/UI_Icons_Outline-38-512.png" /></a></div>
          <div class="icon"><a href="#logout"><icon name="logout" /></a></div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <story-user-item
              :avatar="story.avatar"
              :username="story.username"
              @onPress="handlePress(story.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="user-feeds">
    <ul class="reviews">
      <li class="review-item" v-for="review in reviews" :key="review.id">
        <feed v-bind:review-data="review">
          <template #feedbody>
            <div class="feedbody_popup">
              <div class="review-title">{{ review.review_title }}</div>
              <div v-html="review.review_desc"></div>
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
import topline from '../../components/topline'
import icon from '../../components/icons'
import stories from './data.json'
import feed from '../../components/feed/feed.vue'
import score from '../../components/score/score.vue'
import reviews from './reviews.json'
import headline from '../../components/headline/headline.vue'
import avatar from '../../components/avatar/avatar.vue'

export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    StoryUserItem,
    feed,
    score,
    headline,
    avatar
  },
  data () {
    return {
      stories,
      reviews
    }
  },
  methods: {
    handlePress (val) {
      console.log(val, stories.filter(story => story.id === val)[0])
    },
    likeClicked (elId, elLiked) {
      // console.log('like', elId, elLiked)
      const curRow = reviews.find(b => b.id === elId)
      // console.log(curRow)
      if (curRow) {
        curRow.liked = !elLiked
      }
      if (!elLiked) {
        curRow.likes++
      } else {
        curRow.likes--
      }
      // console.log(reviews)
    },
    forkClicked (elId) {
      // console.log('forking..', elId)
      const curRow = reviews.find(b => b.id === elId)
      // console.log(curRow)
      if (curRow) {
        curRow.forks++
      }
    }
  }
}
</script>
<style lang="scss" scoped src="./feeds.scss"></style>
