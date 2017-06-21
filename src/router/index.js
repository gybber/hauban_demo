import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home.vue'
import Design from '@/components/detail/design.vue'
import Folk from '@/components/detail/folk.vue'
import Desc from '@/components/detail/desc.vue'
import Photos from '@/components/detail/photos.vue'
import Paint from '@/components/detail/paint.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/design',
      component: Design
    },
    {
      path: '/folk',
      component: Folk
    },
    {
      path: '/desc',
      component: Desc
    },
    {
      path: '/photos',
      component: Photos
    }
    ,{
      path: '/paint',
      component: Paint
    }
  ]
})
