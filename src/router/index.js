import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true//导航栏在该页面显示
    },
  },
  {
    path: '/bookshelf',
    name: 'bookshelf',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bookshelf.vue'),
    meta: {
      keepAlive: true//导航栏在该页面显示
    },
  }, {
    path: '/found',
    name: 'found',

    component: () => import(/* webpackChunkName: "about" */ '../views/Found.vue'),
    meta: {
      keepAlive: true//导航栏在该页面显示
    },
  }, {
    path: '/listenbooks',
    name: 'listenbooks',

    component: () => import(/* webpackChunkName: "about" */ '../views/ListenBooks.vue'),
    meta: {
      keepAlive: true//导航栏在该页面显示
    },
  },
  {
    path: '/Appphonelogin',
    name: 'Appphonelogin',

    component: () => import(/* webpackChunkName: "about" */ '../views/Appphonelogin.vue'),
    meta: {
      keepAlive: false//导航栏在该页面不予显示
    }

  },
  {
    path: '/Welfare',
    name: 'Welfare',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Welfare.vue'),
    meta: {
      keepAlive: false//导航栏在该页面不予显示
    }
  },
  {
    path: '/Juvenile',
    name: 'Juvenile',

    component: () => import(/* webpackChunkName: "about" */ '../views/Juvenile.vue'),
    meta: {
      keepAlive: false//导航栏在该页面不予显示
    }
  },
  {
    path: '/Search',
    name: 'Search',

    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue'),
    meta: {
      keepAlive: false//导航栏在该页面不予显示
    }
  },
  {
    path: '/Radio',
    name: 'Radio',

    component: () => import(/* webpackChunkName: "about" */ '../views/Radio.vue'),
    meta: {
      keepAlive: false//导航栏在该页面不予显示
    }
  },
  {
    path: '/Vouth',
    name: 'Vouth',

    component: () => import(/* webpackChunkName: "about" */ '../views/Vouth.vue'),
    meta: {
      keepAlive: false//导航栏在该页面不予显示
    }
  },
  {
    path: '/Authorization',
    name: 'Authorization',

    component: () => import('../views/Authorization.vue'),
    meta: {
      keepAlive: false//导航栏在该页面不予显示
    }
  },
  {
    path: '/Setup',
    name: 'setup',

    component: () => import('../views/Setup.vue'),
    meta: {
      keepAlive: false//导航栏在该页面不予显示
    }
  },

  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      keepAlive: true//导航栏在该页面显示
    },
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
