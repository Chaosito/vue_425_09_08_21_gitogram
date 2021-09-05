import { createStore } from 'vuex'
import randomuser from './modules/randomuser'
import trendings from './modules/trendings'
import user from './modules/user'
import starred from './modules/starred'
import auth from './modules/auth'

export default createStore({
  getters: {
    getUnstarredOnly (state) {
      if (state.trendings.data !== null && state.starred.data != null) {
        return state.trendings.data.filter((trendingRepos) => !state.starred.data.some((starredRepo) => trendingRepos.id === starredRepo.id))
      }
    }
  },
  modules: {
    auth,
    randomuser,
    trendings,
    user,
    starred
  }
})
