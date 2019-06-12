import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/city',
      name: 'city',
      component: () => import('../views/city/index.vue')
    },
    {
      path: '/',
      component: () => import('../views/index/index.vue'),
      children: [
        {
          path: 'flims',
          component: () => import('../views/index/flims.vue')
        },
        {
          path: 'cinema',
          component: () => import('../views/index/cinema.vue')
        },
        {
          path: '*',
          component: () => import('../views/index/flims.vue')
        }
      ]
    }
  ]
})
