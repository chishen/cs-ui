import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Components from '@/components/Components'
import Grid from '@/components/Grid'
import Layout from '@/components/Layout'
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
          path: '/components/grid',
          name: 'Grid',
          component: Grid
        },
        {
          path: '/components/layout',
          name: 'Layout',
          component: Layout
        },
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
