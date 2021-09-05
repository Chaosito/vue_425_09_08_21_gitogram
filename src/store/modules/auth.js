import * as api from '../../api'

export default {
  namespaced: true,
  state: {},
  actions: {
    getAuthCode () {
      api.auth.goToAuthPage()
    },
    async authUserByCode (store, code) {
      console.log(code)
      const { data } = await api.auth.getTokenByCode(code)
      return data.token
    },
    async logout () {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
}
