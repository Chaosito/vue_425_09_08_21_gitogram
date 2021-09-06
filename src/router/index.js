import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import $store from '../store'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (!$store.getters['user/isLogged'] && localStorage.getItem('token')) {
    if (!await $store.dispatch('user/fetchUser')) {
      console.log('err dispatch fetchuser')
    }
  }

  const isLogged = $store.getters['user/isLogged']
  const authRoute = to.name === 'auth'

  console.log('islog3', isLogged)
  if (!isLogged && !authRoute && !to.meta.guestAccess) {
    next({ name: 'auth' })
  } else if (isLogged && authRoute) {
    next({ name: 'root' })
  } else {
    next()
  }
})

export default router
