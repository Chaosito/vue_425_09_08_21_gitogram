import { createStore } from 'vuex'
import auth from './modules/auth'
import user from './modules/user'
import trendings from './modules/trendings'
import starred from './modules/starred'
import randomuser from './modules/randomuser'
import userRepos from './modules/userRepos'

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
    user,
    trendings,
    starred,
    randomuser,
    userRepos
  }
})
