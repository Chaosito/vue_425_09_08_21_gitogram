<template>
    <div class="c-issues">
        <div class="toggler">
          <toggler @onToggle="handleToggle" />
        </div>
        <div class="c-loader" v-if="opened && loading">
            <placeholder :paragraphs="1"></placeholder>
        </div>
        <ul class="comments" v-if="issues?.length && opened">
            <li class="comment-item" v-for="issue in issues" :key="issue.id">
                <comment :username="issue.user.login" :text="issue.title"></comment>
            </li>
        </ul>
    </div>
</template>
<script>
import { ref } from 'vue'
import toggler from '../toggler'
import placeholder from '../placeholder'
import comment from '../comment'

export default {
  components: {
    toggler, placeholder, comment
  },
  emits: ['loadContent'],
  props: {
    loading: {
      type: Boolean
    },
    issues: {
      type: Array,
      default: () => []
    }
  },
  setup (props, { emit }) {
    const opened = ref(false)
    const handleToggle = (isOpened) => {
      opened.value = isOpened

      if (isOpened && (!props.issues || props.issues?.length === 0)) {
        emit('loadContent')
      }
    }

    return {
      opened,
      handleToggle
    }
  }
}
</script>

<style lang="scss" scoped src='./issues.scss'></style>
