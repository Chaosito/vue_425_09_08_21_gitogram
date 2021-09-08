import * as api from '../../api'

export default {
  namespaced: true,
  state: { data: null, loading: false, error: '' },
  getters: {
    getRepos: (state) => { return state.data }
  },
  mutations: {
    SET_USER_REPOS_DATA (state, payload) { state.data = payload },
    SET_USER_REPOS_LOADING (state, payload) { state.loading = payload },
    SET_USER_REPOS_LOADING_ERROR (state, payload) { state.error = payload }
  },
  actions: {
    async fetchUserRepos ({ commit, getters }) {
      commit('SET_USER_REPOS_LOADING', true)
      commit('SET_USER_REPOS_LOADING_ERROR', '')
      try {
        if (getters.getRepos) return
        const { data } = await api.user.getUserRepos()
        commit('SET_USER_REPOS_DATA', data)
        // console.log(data)
      } catch (error) {
        commit('SET_USER_REPOS_LOADING_ERROR', 'Не удалось загрузить данные. ' + error)
        console.log(error)
      } finally {
        commit('SET_USER_REPOS_LOADING', false)
      }
    }
  }
}
