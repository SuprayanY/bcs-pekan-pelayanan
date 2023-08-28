import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage')
    },
    {
      path: '/docs',
      name: 'documentation',
      component: () => import('@/pages/docs/DocumentationPage'),
      children: [
        {
          path: '/design',
          name: 'design-page',
          component: () => import('@/pages/docs/DesignPage')
        }
      ]
    },
    {
      path: '/kompak/register',
      name: 'kompak-registration',
      component: () => import('@/pages/service/registration/KompakRegistrationPage')
    }
  ]
})

export default router
