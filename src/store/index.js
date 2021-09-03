import { createStore } from 'vuex'
import randomuser from './modules/randomuser'
import trendings from './modules/trendings'
import user from './modules/user'

export default createStore({
  modules: {
    randomuser,
    trendings,
    user
  }
})
