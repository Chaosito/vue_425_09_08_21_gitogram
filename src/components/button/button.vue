<template>
    <button :class="['c-button', `theme-green`, {'hover-text': upHere}]" :data-hover-text="hoverText" @mouseover="mOver(true)" @mouseleave="mOver(false);">
        <span class="btn-text">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    hoverText: {
      type: String
    }
  },
  data () {
    return {
      upHere: false
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  },
  methods: {
    mOver: function (val) {
      this.upHere = val
      // console.log('mover' + this.upHere + 'z' + val);
    }
  }
}
</script>

<style lang="scss" scoped src="./button.scss"></style>
