<template>
    <div class="c-stories-slider">
        <div class="stories-container" style='display:flex'>
            <story-post-item  />
            <story-post-item active />
            <story-post-item  />
        </div>
    </div>
</template>

<script>
import storyPostItem from '../storyPostItem'
// import { mapState, mapActions } from 'vuex'

export default {
  components: { storyPostItem },
  data () {
    return {}
  },
  computed: {
    // ...mapState({
    //   trendings: state => state.trendings.data
    // })
  },
  methods: {
    // ...mapActions({
    //   fetchTrendings: "trendings/fetchTrendinigs"
    // }),
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.ownter?.login,
        content: obj.readme
      }
    }
  },
  async created () {
  //   await this.fetchTrendings()
  }
}
</script>
