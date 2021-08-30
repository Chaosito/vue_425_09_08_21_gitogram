<template>
    <div :class="{ active }" class="c-progress">
        <div ref="indicator" class="indicator"></div>
    </div>
</template>

<script>
export default {
  props: {
    active: Boolean
  },
  data () {
    return {
    //   active: false
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    this.$nextTick(() => {
      // this.active = true
      this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
      console.log('addEventListener: transitionend')
    })
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
    console.log('removeEventListener: transitionend')
  }
}
</script>
<style lang="scss" scoped src="./progressbar.scss"></style>
