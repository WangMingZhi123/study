import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/index',
      name:'index',
      component: () => import('./../components/index.vue'),
      children:[//二级路由
        {
          path:'/one',
          name:'one',
          component:() => import('./../components/one.vue')
        },
        {
          path:'/two',
          name:'two',
          component:() => import('./../components/two.vue')
        },
        {
          path:'/tree',
          name:'tree',
          component:() => import('./../components/tree.vue')
        }
      ]
    }
  ]
})
