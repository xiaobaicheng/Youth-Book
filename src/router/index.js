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
    path: '/ColumnSquare',
    name: 'ColumnSquare',
    component: () => import( '../views/ColumnSquare.vue'),
    meta: {
      keepAlive: true//导航栏在该页面显示
    },
  },
  {
    path: '/TopicSquare',
    name: 'TopicSquare',
    component: () => import( '../views/TopicSquare.vue'),
    meta: {
      keepAlive: true//导航栏在该页面显示
    },
  },
  {
    path: '/bookshelf',
    name: 'bookshelf',
    component: () => import( '../views/Bookshelf.vue'),
    meta: {
      keepAlive: true//导航栏在该页面显示
    },
  }, {
    path: '/found',
    name: 'found',

    component: () => import( '../views/Found.vue'),
    meta: {
      keepAlive: true//导航栏在该页面显示
    },
  }, {
    path: '/listenbooks',
    name: 'listenbooks',

    component: () => import( '../views/ListenBooks.vue'),
    meta: {
      keepAlive: true//导航栏在该页面显示
    },
  },
  {
    path: '/Appphonelogin',
    name: 'Appphonelogin',

    component: () => import( '../views/Appphonelogin.vue'),
    meta: {
      keepAlive: false//导航栏在该页面不予显示
    }

  },
  {
    path: '/Welfare',
    name: 'Welfare',
    component: () => import( '../views/Welfare.vue'),
    meta: {
      keepAlive: false//导航栏在该页面不予显示
    }
  },
  {
    path: '/Juvenile',
    name: 'Juvenile',

    component: () => import( '../views/Juvenile.vue'),
    meta: {
      keepAlive: false//导航栏在该页面不予显示
    }
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import( '../views/Search.vue'),
    meta: {
      keepAlive: false//导航栏在该页面不予显示
    }
  },
  {
    path: '/Customer',
    name: 'Customer',
    component: () => import( '../views/Customer.vue'),
    meta: {
      keepAlive: false//导航栏在该页面不予显示
    }
  },
  {
    path: '/Radio',
    name: 'Radio',

    component: () => import( '../views/Radio.vue'),
    meta: {
      keepAlive: false//导航栏在该页面不予显示
    }
  },
  {
    path: '/Vouth',
    name: 'Vouth',

    component: () => import( '../views/Vouth.vue'),
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
    path: '/Character',
    name: 'Character',

    component: () => import('../views/Character.vue'),
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

    component: () => import( '../views/About.vue'),
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
