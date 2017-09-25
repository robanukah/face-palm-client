import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Example from '@/components/ExampleComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    }
  ]
})
