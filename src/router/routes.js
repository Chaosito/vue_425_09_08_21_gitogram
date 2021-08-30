import feeds from '../pages/feeds'
import stories from '../pages/stories'
import userProfile from '../pages/userProfile'
import page404 from '../pages/404'

export default [
  {
    path: '/',
    component: feeds
  },
  {
    name: 'stories',
    path: '/stories',
    component: stories
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
    component: page404
  }
]
