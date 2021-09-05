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
    SET_STARRED_DATA (state, payload) {
      state.data = payload
    },
    SET_STARRED_LOADING (state, payload) {
      state.loading = payload
    },
    SET_STARRED_LOADING_ERROR (state, payload) {
      state.error = payload
    }
  },
  actions: {
    async fetchUserStarred ({ commit, getters }, { limit }) {
      commit('SET_STARRED_LOADING', true)
      commit('SET_STARRED_LOADING_ERROR', '')
      try {
        /*
        Следующая проверка предовратит все последующие запросы к серверу, но, если мы лайкнем rep в сториз,
        то он не появится на главной, так что либо не использовать эту проверку, либо пушить реп в store.starred из
        store.trendings (у них вродь одинаковая структура), тем самым избежав запроса на сервер,
        но тогда можно столкнутся с рассинхроном
        */
        // if (getters.getRepos) return
        const { data } = await api.starred.getStarredRepos({ limit })
        commit('SET_STARRED_DATA', data)
        // console.log(data)
      } catch (error) {
        commit('SET_STARRED_LOADING_ERROR', 'Не удалось загрузить данные. ' + error)
        console.log(error)
      } finally {
        commit('SET_STARRED_LOADING', false)
      }
    }
  }
}
