import { createRouter, createWebHistory } from "vue-router";

import { routes } from './routes'
import { store } from '../store'

export const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  console.log('isLoggedIn', store.getters.isLoggedIn)
  if (to.path !== '/login' && !store.getters.isLoggedIn) {
    if (import.meta.env.VITE_AUTH_USER && import.meta.env.VITE_AUTH_PWD) {
      store.dispatch('login', {
        username: import.meta.env.VITE_AUTH_USER,
        password: import.meta.env.VITE_AUTH_PWD
      }).then(() => {
        router.push('/')
      })
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
