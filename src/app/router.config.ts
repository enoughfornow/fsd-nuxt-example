import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/home').then(r => r.default || r)
    },
    {
      name: 'main',
      path: '/main',
      component: () => import('@/pages/main').then(r => r.default || r)
    }
  ],
}