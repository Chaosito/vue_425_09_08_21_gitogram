import feeds from '../pages/feeds'
import stories from '../pages/stories'
import auth from '../pages/auth'
import temp from '../pages/temp'
import userProfile from '../pages/userProfile'
import page404 from '../pages/404'
import profile from '../pages/profile'
// import profileRepos from '../pages/profile/repos'
import profileFollowing from '../pages/profile/following'

export default [
  {
    name: 'root',
    path: '/',
    component: feeds
  },
  {
    name: 'stories',
    path: '/stories',
    component: stories
  },
  {
    name: 'auth',
    path: '/auth',
    component: auth
  },
  {
    name: 'temp',
    path: '/temp',
    component: temp
  },
  {
    name: 'profile',
    path: '/profile',
    component: profile,
    props: true,
    children: [
      {
        name: 'profile-repos',
        path: 'repos',
        // component: profileRepos
        component: () => import('../pages/profile/repos')
      },
      {
        name: 'profile-following',
        path: 'following',
        component: profileFollowing
      }
    ]
  },
  {
    // path: '/user-profile/:id',
    path: '/user-profile/:id(\\d+)',
    // path: '/:id+',
    // path: '/:id*',
    component: userProfile,
    name: 'user-profile',
    props: true,
    children: [
      {
        path: '',
        component: feeds
      },
      {
        path: 'settings',
        component: page404
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    meta: {
      guestAccess: true
    },
    component: page404
  }
]
