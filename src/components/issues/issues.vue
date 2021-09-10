<template>
    <div class="c-issues">
        <toggler @onToggle="handleToggle" />
        <div class="c-loader" v-if="loading">
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
      console.log('togglerTurn', isOpened, props)
      opened.value = isOpened

      if (isOpened && (!props.issues || props.issues?.length === 0)) {
        console.log('tryLoad')
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
