import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users',
      component: () => import('../components/UsersList.vue')
    },
    {
      path: '/create-user',
      name: 'create-user',
      component: () => import('../components/UsersCreate.vue')
    },
    {
      path: '/delete-user',
      name: 'delete-user',
      component: () => import('../components/UsersDelete.vue')
    },
  ]
})

export default router
