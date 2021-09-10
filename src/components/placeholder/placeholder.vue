<template>
  <div class="placeholder">
    <div class="pseudo-img" v-for="item in images" :key="item"></div>
    <div class="pseudo-text" v-for="item in paragraphs" :key="item">
      <p>&nbsp;</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Number,
    paragraphs: Number
  }
}
</script>

<style lang="scss" scoped src="./placeholder.scss"></style>
