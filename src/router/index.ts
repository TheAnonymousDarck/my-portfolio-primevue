import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 500));
  },
  routes: routes,
})

export default router
