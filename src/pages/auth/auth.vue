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
                    <x-button @click="getCode"><div class="button-text">Authorize with github <div class="icon"><icon name="github" /></div></div></x-button>
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
import * as api from '../../api'

const clientId = process.env.VUE_APP_GITHUB_AUTH_CLIENT_ID
const clientSecret = process.env.VUE_APP_GITHUB_AUTH_CLIENT_SECRET

// console.log(clientId, clientSecret)

export default {
  components: {
    logo,
    xButton: button,
    icon
  },
  methods: {
    async getCode () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'

      const params = new URLSearchParams()
      params.append('client_id', clientId)
      params.append('scope', 'repo:status read:user')

      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      try {
        const data = await api.auth.getToken({ clientId, code, clientSecret })
        localStorage.setItem('token', data.data.token)
        this.$router.replace({ name: 'temp' })
        return
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./auth.scss"></style>
