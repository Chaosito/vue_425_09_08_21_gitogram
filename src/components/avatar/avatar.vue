<template>
    <div class="avatar-component">
        <div :class="['image', {'bordered' : active }]">
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
    active: Boolean
  }
}
</script>

<style lang="scss" scoped src="./avatar.scss"></style>
