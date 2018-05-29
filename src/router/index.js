import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Components from '@/components/Components'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/components',
      name: 'Components',
      component: Components,
      children: [
        {
          path: '/components/button',
          name: 'Button',
          component: Button
        },
        {
          path: '/components/icon',
          name: 'Icon',
          component: Icon
        }
      ]
    }
  ]
})
