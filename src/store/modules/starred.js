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
      // state.data = payload
      state.data = payload.map(item => {
        item.issues = {
          data: null,
          loading: false,
          error: ''
        }
        return item
      })
    },
    SET_STARRED_LOADING (state, payload) {
      state.loading = payload
    },
    SET_STARRED_LOADING_ERROR (state, payload) {
      state.error = payload
    },
    SET_ISSUES_FOR_REPO: (state, payload) => {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.issues = {
            ...repo.issues,
            ...payload.data
          }
        }
        return repo
      })
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
      } catch (error) {
        commit('SET_STARRED_LOADING_ERROR', 'Не удалось загрузить данные. ' + error)
        console.log(error)
      } finally {
        commit('SET_STARRED_LOADING', false)
      }
    },
    async setRepoIssues ({ commit, getters }, repoId) {
      commit('SET_ISSUES_FOR_REPO', {
        id: repoId,
        data: {
          loading: true,
          error: ''
        }
      })

      try {
        const curRep = getters.getRepoById(repoId)
        if (curRep.issues.data !== null) return

        const { data } = await api.issues.getIssues({ owner: curRep.owner.login, repo: curRep.name })
        commit('SET_ISSUES_FOR_REPO', {
          id: repoId,
          data: {
            data: data
          }
        })
      } catch (error) {
        commit('SET_ISSUES_FOR_REPO', {
          id: repoId,
          data: {
            loading: false,
            error: error
          }
        })
        console.log(error)
      } finally {
        commit('SET_ISSUES_FOR_REPO', {
          id: repoId,
          data: {
            loading: false
          }
        })
      }
    }
  }
}
