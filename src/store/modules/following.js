import * as api from '../../api'

export default {
  namespaced: true,
  state: { data: null, loading: false, error: '' },
  getters: {
    getFollowingUsers: (state) => { return state.data }
  },
  mutations: {
    SET_FOLLOWING_DATA (state, payload) { state.data = payload },
    SET_FOLLOWING_LOADING (state, payload) { state.loading = payload },
    SET_FOLLOWING_LOADING_ERROR (state, payload) { state.error = payload }
  },
  actions: {
    async fetchFollowing ({ commit, getters }, { login }) {
      commit('SET_FOLLOWING_LOADING', true)
      commit('SET_FOLLOWING_LOADING_ERROR', '')
      try {
        if (getters.getFollowingUsers) return
        const { data } = await api.user.getFollowing({ login })
        commit('SET_FOLLOWING_DATA', data)
      } catch (error) {
        commit('SET_FOLLOWING_LOADING_ERROR', 'Не удалось загрузить данные. ' + error)
        console.log(error)
      } finally {
        commit('SET_FOLLOWING_LOADING', false)
      }
    }
  }
}
