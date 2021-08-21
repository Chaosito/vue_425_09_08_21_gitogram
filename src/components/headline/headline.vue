<template>
    <div class="headline-component">
        <div class="container">
            <div class="slot-data">
                <slot />
            </div>
            <div class="title">{{ title }}</div>
            <div class="btns">
                <button type="button" class="btn" @click="$emit('change', 'messages')">{{ msgText }}</button>
                <button type="button" class="btn" @click="$emit('change', 'logout')">{{ logoutText }}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    msgText: String,
    logoutText: String
  }
}
</script>

<style lang="scss" scoped src="./headline.scss"></style>
