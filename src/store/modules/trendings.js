import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: null,
    loading: false,
    error: ''
  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.data.find(item => item.id === id)
    },
    getRepos: (state) => {
      return state.data
    }
  },
  mutations: {
    SET_TRENDINGS_DATA (state, payload) {
      state.data = payload
    },
    SET_TRENDINGS_LOADING (state, payload) {
      state.loading = payload
    },
    SET_TRENDINGS_LOADING_ERROR (state, payload) {
      state.error = payload
    },
    SET_README (state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    }
  },
  actions: {
    async fetchTrendinigs ({ commit, getters }) {
      commit('SET_TRENDINGS_LOADING', true)
      commit('SET_TRENDINGS_LOADING_ERROR', '')
      try {
        if (getters.getRepos) return
        const { data } = await api.trendings.getTrendings()

        // console.log(data)
        commit('SET_TRENDINGS_DATA', data.items)
      } catch (error) {
        commit('SET_TRENDINGS_LOADING_ERROR', 'Не удалось загрузить данные. ' + error)
        console.log(error)
      } finally {
        commit('SET_TRENDINGS_LOADING', false)
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return

      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (error) {
        console.log('error', error)
      }
    }
  }
}
