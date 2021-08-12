<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="icon"><icon name="home" /></div>
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
</template>

<script>
import StoryUserItem from '../../components/storyUserItem/storyUserItem.vue'
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import stories from './data.json'

export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    StoryUserItem
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

<style lang="scss" scoped>
.icon {
    color: red;
    width: 50px;
}
</style>
<style lang="scss" scoped src="./feeds.scss"></style>
