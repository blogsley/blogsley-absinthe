
import Index from '../pages/index.vue'
import MyLayout from '../layouts/MyLayout.vue'

export const routes = [
  {
    path: '/',
    component: () => import('@layouts/MyLayout.vue'),
    children: [
      { path: '', component: Index },
      { path: 'json', component: () => import('@pages/Json.vue') }
    ]
  }
]

// Always leave this as last one
if (import.meta.env.MODE !== 'ssr') {
  routes.push(  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@pages/Error404.vue') },
  )
}
