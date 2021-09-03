<template>
    <button :class="['c-button', `theme-${theme}`, {'hover-text': upHere}]" :data-hover-text="hoverText" @mouseover="mOver(true)" @mouseleave="mOver(false);">
        <span class="btn-text">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    theme: {
      type: String
    },
    loading: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
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
    }
  },
  created () {
    console.log(this.theme)
    console.log(this.loading)
  }
}
</script>

<style lang="scss" scoped src="./button.scss"></style>
