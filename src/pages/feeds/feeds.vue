<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="topline-logo">
                  <img alt="Gitogram logo" src="../../assets/gitogram_logo.png" />
                </div>
                <div class="topline-icons">
                  <div class="icon"><icon name="home" /></div>
                  <div class="icon"><icon name="logout" /></div>
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
      <feed>
        <template #feedbody>
          <div class="feedbody_popup">
          <div style="font-size: 26px; font-weight: bold;">Vue.js</div>
          <div>JavaScript framework for building interactive web applications ⚡</div>
          <div>ScoreComponent</div>
          </div>
        </template>
      </feed>
      <feed>
        <template #feedbody>
          <div class="feedbody_popup">
          <div style="font-size: 26px; font-weight: bold;">React.js</div>
          <div>Open source JavaScript library used for designing user interfaces</div>
          <div>ScoreComponent</div>
          </div>
        </template>
      </feed>
    </div>
</template>

<script>
import StoryUserItem from '../../components/storyUserItem/storyUserItem.vue'
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import stories from './data.json'
import feed from '../../components/feed/feed.vue'

export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    StoryUserItem,
    feed
  },
  data () {
    return {
      stories
    }
  },
  methods: {
    handlePress (val) {
      console.log(val, stories.filter(story => story.id === val)[0])
    }
  }
}
</script>
<style lang="scss" scoped src="./feeds.scss"></style>
