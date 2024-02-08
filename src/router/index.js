import { createRouter, createWebHistory } from 'vue-router'

// Router Pages Setup
// Admin
const Login = () => import('../views/admin/Login.vue');

// User
const Home = () => import('../views/user/Home.vue');


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'Login',
      },
    },
  ]
})

export default router
