import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'
import ThreadShow from '@/pages/PageThreadShow'
import ThreadCreate from '@/pages/PageThreadCreate'
import ThreadEdit from '@/pages/PageThreadEdit'
import Forum from '@/pages/PageForum'
import Profile from '@/pages/PageProfile'
import Category from '@/pages/PageCategory'
import Register from '@/pages/PageRegister'
import Signin from '@/pages/PageSignin'
import NotFound from '@/pages/PageNotFound'

import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: Category,
      props: true
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: Forum,
      props: true
    },
    {
      path: '/thread/create/:forumId',
      name: 'ThreadCreate',
      component: ThreadCreate,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    },
    {
      path: '/thread/:id/edit',
      name: 'ThreadEdit',
      component: ThreadEdit,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/me',
      name: 'Profile',
      component: Profile,
      props: true,
      meta: {requiresAuth: true}
    },
    {
      path: '/me/edit',
      name: 'ProfileEdit',
      component: Profile,
      props: {edit: true},
      meta: { requiresAuth: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: { requiresGuest: true }
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin,
      meta: { requiresGuest: true }
    },
    {
      path: '/logout',
      name: 'SignOut',
      meta: { requiresAuth: true },
      beforeEnter (to, from, next) {
        store.dispatch('signOut')
          .then(() => next({name: 'Home'}))
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(`navigation to ${to.name} from ${from.name}`)
  store.dispatch('auth/initAuthentication')
    .then(user => {
      if (to.matched.some(route => route.meta.requiresAuth)) {
    // protected route
        if (user) {
          next()
        } else {
          next({name: 'Signin', query: {redirectTo: to.path}})
        }
      } else if (to.matched.some(route => route.meta.requiresAuth)) {
        // protected route
        if (!user) {
          next()
        } else {
          next({name: 'Home'})
        }
      } else {
        next()
      }
    })
})

export default router
