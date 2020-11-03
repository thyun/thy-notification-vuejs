import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from '@/layouts/Default.vue'
import HelloLayout from '@/layouts/Hello.vue'
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
      component: HelloLayout,
      children: [
        {
          path: '',
          component: Hello
        }
      ]
    },
    {
      path: '/targets',
      name: 'Target',
      component: DefaultLayout,
      children: [
        {
          path: '',
          component: TargetIndex
        },
        {
          path: '/targets-new',
          component: TargetNew
        },
        {
          path: '/targets-edit',
          component: TargetEdit
        }
      ]
    }
  ]
})
