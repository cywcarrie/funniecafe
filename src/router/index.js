import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/front/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/front/AboutView.vue')
  },
  {
    path: '/login',
    component: () => import('../views/front/LoginView.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/back/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/back/ProductsView')
      },
      {
        path: 'orders',
        component: () => import('../views/back/OrdersView.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/back/CouponsView.vue')
      }
    ]
  },
  {
    path: '/user',
    component: () => import('../views/front/UserProductsList.vue'),
    children: [
      {
        path: '',
        name: 'Products',
        redirect: '/user/all'
      },
      {
        path: 'all',
        component: () => import('../views/front/AllProducts.vue')
      },
      {
        path: 'coffee',
        component: () => import('../views/front/CoffeeView.vue')
      },
      {
        path: 'cheesecake',
        component: () => import('../views/front/CakeView.vue')
      },
      {
        path: 'macaron',
        component: () => import('../views/front/MacaronView.vue')
      }
    ]
  },
  {
    name: 'product',
    path: '/product/:productId',
    component: () => import('../views/front/UserProduct.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/front/UserCart.vue')
  },
  {
    path: '/checkout',
    component: () => import('../views/front/UserCheckOut.vue')
  },
  {
    path: '/checkorder/:orderId',
    component: () => import('../views/front/UserCheckOrder.vue')
  },
  {
    path: '/favorite',
    component: () => import('../views/front/UserFavoriteView.vue')
  },
  {
    path: '/faqs',
    component: () => import('../views/front/FAQsView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'home'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
