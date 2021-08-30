export default {
  namespaced: true,
  state: {
    foo: 'bar',
    users: [
      { id: 1, name: 'Ivan', car: 'bmw' },
      { id: 2, name: 'Serj', car: 'audi' },
      { id: 3, name: 'Rick', car: 'bmw' }
    ],
    user: {
      data: null,
      loading: false,
      error: ''
    }
  },
  getters: {
    getBmwUsers (state) {
      return state.users.filter(u => u.car === 'bmw')
    },
    getCarUsers: (state) => (model) => {
      return state.users.filter(u => u.car === model)
    },
    getUserIsFemale (state) {
      return state.user.data?.gender === 'female'
    }
  },
  mutations: {
    UPDATE_FOO (state, payload) {
      state.foo = payload
    },
    SET_USER_DATA (state, payload) {
      state.user.data = payload
    },
    SET_USER_LOADING (state, payload) {
      state.user.loading = payload
    },
    SET_USER_LOADING_ERROR (state, payload) {
      state.user.error = payload
    }
  },
  actions: {
    fetchMethod (state, payload) {
      console.log(payload)
    },
    async fetchUser ({ commit }) {
      commit('SET_USER_LOADING', true)
      commit('SET_USER_LOADING_ERROR', '')
      try {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        console.log(data)
        commit('SET_USER_DATA', data.results[0])
      } catch (error) {
        commit('SET_USER_LOADING_ERROR', 'Не удалось загрузить данные. ' + error)
        console.log(error)
      } finally {
        commit('SET_USER_LOADING', false)
      }
    }
  }
}
