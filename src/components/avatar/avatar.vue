<template>
    <div class="avatar-component">
        <div :class="['image', {'bordered' : active }]" :style="style">
            <img v-bind="$attrs">
        </div>
        <div class="username">
            {{ title }}
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    active: Boolean,
    size: Number
  },
  computed: {
    style () {
      return {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./avatar.scss"></style>
