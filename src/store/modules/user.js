import * as api from '../../api'

export default {
  namespaced: true,
  state: { data: null, loading: false, error: '' },
  getters: {
    getUserData: (state) => { return state.data },
    isLogged: (state) => { return state.data !== null }
  },
  mutations: {
    SET_USER_DATA (state, payload) { state.data = payload },
    SET_USER_DATA_LOADING (state, payload) { state.loading = payload },
    SET_USER_DATA_LOADING_ERROR (state, payload) { state.error = payload }
  },
  actions: {
    async fetchUser ({ commit, getters }) {
      commit('SET_USER_DATA_LOADING', true)
      commit('SET_USER_DATA_LOADING_ERROR', '')
      try {
        if (getters.getUserData) return true
        const { data } = await api.user.getUser()
        commit('SET_USER_DATA', data)
      } catch (error) {
        commit('SET_USER_DATA_LOADING_ERROR', 'Не удалось загрузить данные. ' + error)
      } finally {
        commit('SET_USER_DATA_LOADING', false)
      }
      return getters.getUserData
    }
  }
}
