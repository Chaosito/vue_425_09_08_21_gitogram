<template>
    <div class="c-story-post-item" :class="{ active }">
        <div class="stories-container">
            <div class="header">
                <div class="progress">
                    <progressbar :active="active" @onFinish="$emit('onProgressFinish')" />
                </div>
                <div class="user">
                    <avatar :title="data.username" :size="32" :src="data.userAvatar" alt="User pic" />
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
                    <placeholder v-else :images="1" :paragraphs="2" />
                </div>
            </div>
            <div class="button">
                <x-button disabled
                    :theme="data.following.status ? 'gray' : 'green'"
                    :loading='data.following.loading'
                    @click="data.following.loading ? '' : $emit(data.following.status ? 'onUnfollow' : 'onFollow', data.id)"
                >{{ data.following.status ? 'Unfollow' : 'Follow' }}</x-button>
            </div>
            <template v-if="active">
                <button v-if="buttonsShown.includes('next')" class="btn btn-next" @click="$emit('onNextSlide')">
                    <div class="icon">
                        <icon name="arrow"></icon>
                    </div>
                </button>
                <button v-if="buttonsShown.includes('prev')" class="btn btn-prev" @click="$emit('onPrevSlide')">
                    <div class="icon">
                        <icon name="arrow"></icon>
                    </div>
                </button>
            </template>
        </div>
    </div>
</template>

<script>
import button from '../button'
import progressbar from '../progressbar'
import icon from '../icons'
import placeholder from '../placeholder'
import avatar from '../avatar'
import spinner from '../spinner'

export default {
  name: 'StoryPostItem',
  components: {
    xButton: button,
    progressbar: progressbar,
    avatar,
    icon,
    placeholder,
    spinner
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish', 'onFollow', 'onUnfollow'],
  props: {
    active: Boolean,
    loading: Boolean,
    buttonsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
<style lang="scss" scoped src="./storyPostItem.scss"></style>
