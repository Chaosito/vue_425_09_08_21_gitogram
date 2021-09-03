import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import * as api from '../api'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'

  try {
    await api.user.getUser()
    if (authRoute) {
      next({ name: 'root' })
      return
    }

    next()
  } catch (e) {
    if (authRoute) {
      next()
      return
    }

    next({ name: 'auth' })
  }
})

export default router
