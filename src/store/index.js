import { createStore } from 'vuex'
import randomuser from './modules/randomuser'
import trendings from './modules/trendings'
import user from './modules/user'
import starred from './modules/starred'

export default createStore({
  modules: {
    randomuser,
    trendings,
    user,
    starred
  }
})
