<template>
<div class="icon"><icon name="spin" /></div>
</template>

<script>
import icon from '../icons'
export default {
  components: {
    icon
  }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
svg {
    animation: spin 2s linear 0s infinite;
}
.icon {
    width: 48px;
}
</style>
