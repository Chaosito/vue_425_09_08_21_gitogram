<template>
    <div class="c-story-post-item" :class="{ active }">
        <div class="stories-container">
            <div class="header">
                <div class="progress">
                    <progressbar :active="active" />
                </div>
                <div class="user">
                    <avatar title="React.reposit" :size="32" src="https://picsum.photos/32/32" alt="User pic" />
                </div>
            </div>
            <div class="content">
                <div class="loader" v-if="loading">
                    <spinner />
                </div>
                <div class="info" v-else>
                    <div
                        v-if="data.content && data.content.length"
                        class="content-text"
                        v-html="data.content"
                    ></div>
                    <placeholder v-else :paragraphs="2" />
                </div>
            </div>
            <div class="button">
                <x-button>Follow</x-button>
            </div>
            <template v-if="active">
                <button class="btn btn-next">
                    <div class="icon">
                        <icon name="arrow"></icon>
                    </div>
                </button>
                <button class="btn btn-prev">
                    <div class="icon">
                        <icon name="arrow"></icon>
                    </div>
                </button>
            </template>
        </div>
    </div>
</template>

<script>
// import { user } from '../user'
import button from '../button'
import progressbar from '../progressbar'
import icon from '../icons'
import placeholder from '../placeholder'
import avatar from '../avatar'
import spinner from '../spinner'

export default {
  name: 'StoryUserItem',
  components: {
    // user,
    xButton: button,
    progressbar: progressbar,
    avatar,
    icon,
    placeholder,
    spinner
  },
  props: {
    active: Boolean,
    loading: Boolean,
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
<style lang="scss" scoped src="./storyPostItem.scss"></style>
