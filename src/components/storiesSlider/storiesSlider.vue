<template>
    <div class="c-stories-slider">
        <div class="stories-container">
            <ul class="stories" ref="slider">
              <li
              class="stories-item"
              :class="{ 'active' : slideIndex === index }"
              v-for="(trending, index) in trendings"
              :key="trending.id"
              ref="item"
              >
                <story-post-item
                :data="getStoryData(trending)"
                :active="slideIndex === index"
                :loading="slideIndex === index && loading"
                :buttonsShown="activeButtons"
                @onNextSlide="handleSlide(index + 1)"
                @onPrevSlide="handleSlide(index - 1)"
                @onProgressFinish="handleSlide(index + 1)"
                @onFollow="starRepo"
                @onUnfollow="unstarRepo"
                />
              </li>
            </ul>
        </div>
    </div>
</template>

<script>
import storyPostItem from '../storyPostItem'
import { mapState, mapActions } from 'vuex'

export default {
  components: { storyPostItem },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data () {
    return {
      slideIndex: 0,
      sliderPosition: 0,
      loading: false,
      buttonsShown: true
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    }),
    activeButtons () {
      if (this.buttonsShown === false) return []
      if (this.slideIndex === 0) return ['next']
      if (this.slideIndex === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendinigs',
      fetchReadme: 'trendings/fetchReadme',
      starRepo: 'trendings/likeRepo',
      unstarRepo: 'trendings/dislikeRepo'
    }),
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.trendings[this.slideIndex]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme,
        following: obj.following
      }
    },
    moveSlider (goToIndex) {
      const { slider, item } = this.$refs
      this.slideIndex = goToIndex
      this.sliderPosition = -(parseInt(getComputedStyle(item).getPropertyValue('width')) * goToIndex)
      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },
    async loadReadme () {
      this.loading = true
      this.buttonsShown = false
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (e) {
        console.log(e)
        throw e
      } finally {
        this.loading = false
        this.buttonsShown = true
      }
    },
    async handleSlide (goToIndex) {
      if (goToIndex < 0 || goToIndex >= this.trendings.length) {
        return false
      }
      this.moveSlider(goToIndex)
      await this.loadReadme()
    }
  },
  async mounted () {
    await this.fetchTrendings()

    if (this.initialSlide) {
      const index = this.trendings.findIndex(item => item.id === this.initialSlide)
      await this.handleSlide(index)
    } else {
      await this.loadReadme()
    }
  }
}
</script>

<style lang="scss" scoped src='./storiesSlider.scss'></style>
