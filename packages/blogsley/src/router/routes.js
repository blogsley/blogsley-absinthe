export const routes = [
  {
    path: '/',
    component: () => import('@layouts/DefaultLayout.vue'),
    children: [
      { path: '', component: () => import('@pages/index.vue') },
      { path: 'pages', component: () => import('@pages/Pages/index.vue') },
      { path: 'images', component: () => import('@pages/Images/index.vue') },
      { path: 'users', component: () => import('@pages/Users/index.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('@layouts/DefaultLayout.vue'),
    children: [
      { path: 'login', component: () => import('@pages/Login.vue') },
      { path: 'logout', component: () => import('@pages/Login.vue'), props: { isLogout: true } },
      { path: 'pages/create', component: () => import('@pages/Pages/Create/index.vue'), props: true },
      { path: 'pages/:id', component: () => import('@pages/Pages/Update/index.vue'), props: true },
      { path: 'pages/:id/json', name: 'json', component: () => import('@pages/Pages/Json/index.vue'), props: true },
      { path: 'images/create', component: () => import('@pages/Images/Create/index.vue'), props: true },
      { path: 'images/:id', component: () => import('@pages/Images/Update/index.vue'), props: true },
      { path: 'imagechooser', name: 'imagechooser', component: () => import('@pages/Images/Chooser/index.vue'), props: true },
      { path: 'users/create', component: () => import('@pages/Users/Create/index.vue'), props: true },
      { path: 'users/:id', component: () => import('@pages/Users/Update/index.vue'), props: true }
    ]
  }

]

// Always leave this as last one
if (import.meta.env.MODE !== 'ssr') {
  routes.push(  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@pages/Error404.vue') },
  )
}