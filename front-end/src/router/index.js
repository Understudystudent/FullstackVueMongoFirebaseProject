import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/cart',
      name: 'ShoppingCartPage',
      component: ()=> import('../pages/ShoppingCartPage.vue'),
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: ()=> import('../pages/AboutPage.vue'),
    },
    {
      path: '/home',
      name: 'HomePage',
      component: ()=> import('../pages/AboutPage.vue'),
    },
    {
        path: '/products/:productId',
        name: 'ProductDetailPage',
        component: ()=> import('../pages/ProductDetailPage.vue'),

    },
    {
        path: '/products',
        name: 'ProductsPages.vue',
        component: ()=> import('../pages/ProductsPages.vue'),
     },
     {
      path: '/pathMatch(.*)*',
      name: 'NotFoundPage',
      component:()=> import ('../pages/NotFoundPage.vue')
     }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  export default router