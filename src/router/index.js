import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Protected from '../views/Protected.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Protected',
    name: 'Protected',
    component: Protected
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    meta: {
      progress: {
        func: [
          { call: 'color', modifier: 'temp', argument: '#ffb000' },
          { call: 'fail', modifier: 'temp', argument: '#6e0000' },
          { call: 'location', modifier: 'temp', argument: 'top' },
          {
            call: 'transition',
            modifier: 'temp',
            argument: { speed: '1.5s', opacity: '0.6s', termination: 400 }
          }
        ]
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.afterEach(() => {});
export default router;
