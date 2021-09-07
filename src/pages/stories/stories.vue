<template>
  <page-header theme="black">
    <template #header-user-icons>
      <button class="logo" @click="$router.go('-1')">
        <div class="icon"><icon color="white" name="close" /></div>
      </button>
    </template>
  </page-header>
  <div class="wrapper">
    <div class="content">
      <stories-slider :initialSlide="Number($route.params.initialSlide)" />
    </div>
  </div>
</template>

<script>
import storiesSlider from '../../components/storiesSlider'
import icon from '../../components/icons'
import pageHeader from '../../components/pageHeader'

export default {
  components: {
    storiesSlider,
    icon,
    pageHeader
  }
}
</script>
<style lang="scss" scoped src="./stories.scss"></style>
