import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MMain from '../components/M-Main'

Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [{
      path: '/',
      name: 'main',
      component: MMain,
    }, {
      path: 'changeCity',
      name: 'changeCity',
      component: () => import("@/components/ChangeCity")
    }, {
      path: 's/:wd',
      name: 's',
      component: () => import("@/components/Product"),
    }]
  }, {
    path: '/register',
    name: 'register',
    component: () => import("@/views/Register")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/Login")
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, options) {
    return {
      x: 0,
      y: 0
    };

  }
})

export default router