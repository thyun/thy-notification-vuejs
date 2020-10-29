import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import TargetIndex from '@/components/TargetIndex'
import TargetNew from '@/components/TargetNew'
import TargetEdit from '@/components/TargetEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/targets',
      name: 'TargetIndex',
      component: TargetIndex
    },
    {
      path: '/targets-new',
      name: 'TargetNew',
      component: TargetNew
    },
    {
      path: '/targets-edit',
      name: 'TargetEdit',
      component: TargetEdit
    }
  ]
})
