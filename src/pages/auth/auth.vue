<template>
    <div class="page-auth">
        <div class="page-content">
            <div class="left-side">
                <div class="logo">
                    <logo />
                </div>
                <div class="descr">
                    More than just one repository.
                    This is our digital world.
                </div>
                <div class="gitbtn">
                    <x-button @click="getAuthCode"><div class="button-text">Authorize with github <div class="icon"><icon name="github" /></div></div></x-button>
                </div>
            </div>
            <div class="right-side">
                <img src="../../assets/macbook.png" />
            </div>
        </div>
        <div class="page-footer">
            © Gitogram from Loftschool
        </div>
    </div>
</template>

<script>
import logo from '../../components/logo'
import button from '../../components/button'
import icon from '../../components/icons'
import { mapActions } from 'vuex'

export default {
  components: {
    logo,
    xButton: button,
    icon
  },
  methods: {
    ...mapActions({
      getAuthCode: 'auth/getAuthCode',
      authUserByCode: 'auth/authUserByCode'
    })
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      try {
        const token = await this.authUserByCode({ code })
        console.log(token)
        localStorage.setItem('token', token)
        this.$router.replace({ name: 'root', query: null })
        window.location.href = window.origin
        return
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style lang="scss" scoped src="./auth.scss"></style>
