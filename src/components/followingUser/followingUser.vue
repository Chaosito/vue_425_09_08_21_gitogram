<template>
    <div class="following-row">
        <div class="user">
            <div class="ava">
                <img :src="userObject.avatar_url" />
            </div>
            <div class="user-info">
                <div class="login">{{ userObject.login }}</div>
                <div class="level">{{ userObject.type }}</div>
            </div>
        </div>
        <div class="button">
            <x-button>following</x-button>
        </div>
    </div>
</template>
<script>
import button from '../button'
export default {
  components: {
    xButton: button
  },
  props: { userObject: Object }
}
</script>
<style lang="scss" scoped src='./followingUser.scss'></style>
