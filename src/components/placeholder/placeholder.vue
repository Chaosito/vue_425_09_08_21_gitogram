<template>
  <div class="placeholder">
    <div class="pseudo-img"></div>
    <div class="pseudo-text" v-for="item in paragraphs" :key="item">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paragraphs: Number
  }
}
</script>

<style lang="scss" scoped src="./placeholder.scss"></style>
