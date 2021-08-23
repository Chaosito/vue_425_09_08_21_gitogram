<template>
  <button :class="['button', { active: thisIsOpened }]" @click="toggle">
    <span class="text">{{ thisIsOpened ? "Hide" : "View" }} issues</span>
    <span class="icon">
      <icon name="triangle" />
    </span>
  </button>
</template>
<script>
import icon from '../icons'

export default {
  components: {
    icon
  },
  props: {
    isOpened: String
  },
  data () {
    return {
      thisIsOpened: this.isOpened
    }
  },
  methods: {
    toggle () {
      this.thisIsOpened = !this.thisIsOpened
      this.$emit('onToggle', this.thisIsOpened)
    }
  }
}
</script>
<style lang="scss" scoped src="./toggler.scss"></style>
