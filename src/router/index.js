import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/home/index'
import Index2 from '@/views/home/index2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/lazy-true',
      component: Index2
    }
  ]
})
