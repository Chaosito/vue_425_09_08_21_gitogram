<template>
  <div class="topline">
    <topline>
      <template #headline>
        <button class="logo" @click="$router.push('/')">
            <logo color="white" />
        </button>
        <div class="topline-icons">
            <button class="logo" @click="$router.go('-1')">
                <div class="icon"><icon color="white" name="close" /></div>
            </button>
        </div>
      </template>
    </topline>
  </div>
  <div class="wrapper">
      <div class="content">
          <stories-slider :initialSlide="Number($route.params.initialSlide)" />
      </div>
  </div>
</template>

<script>
import logo from '../../components/logo'
import storiesSlider from '../../components/storiesSlider'
import topline from '../../components/topline'
import icon from '../../components/icons'

export default {
  components: {
    storiesSlider,
    topline,
    icon,
    logo
  }
}
</script>
<style lang="scss" scoped>
.c-topline {
    background: #000;
    border:none;
}
.wrapper {
    background: #000;
}
.topline-logo {
  display: inline-block;
}
.topline-icons {
  display: inline-flex;
  float:right;
  justify-content: flex-end;
  align-items: center;

  a {
    color: black;
  }

  .icon {
    margin: 10px;
    width: 25px;
  }
}
</style>
