import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

// Router Pages Setup
// Admin
const Login = () => import('../views/admin/Login.vue');
const Dashboard = () => import('../views/admin/Dashboard.vue');

// User
const Home = () => import('../views/user/Home.vue');


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  base: import.meta.env.BASE_URL,
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
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        title: 'Dashboard',
      },
    },
  ]
})

const DEFAULT_TITLE = '曽我様案件';

router.afterEach((to, from) => {
  nextTick(() => {
      document.title = to.meta.title || DEFAULT_TITLE;
      localStorage.setItem('title', JSON.stringify(to.meta.title))
  });
});

router.beforeEach((to, from, next) => {
  // Define an array of public route names
  const publicPages = ['login', '404'];

  // Check if the target route is in the list of public pages
  const isPublicPage = publicPages.includes(to.name);

  // Check if the user is logged in
  const isAuthenticated = !!localStorage.getItem('Token');

  // If the route is private and the user is not authenticated, redirect to the Login page
  if (!isPublicPage && !isAuthenticated) {
      next({ name: 'login' });
  } else if (to.name === 'login' && isAuthenticated) {
      // If the user is logged in and trying to access the Login page, redirect to Home
      next({ name: 'dashboard' });
  } else {
      next();
  }
});

export default router;
