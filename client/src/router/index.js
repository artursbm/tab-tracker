// This file is functionality of the code that designates how to hit different routes
// If I type localhost:8080/, takes to the 'Hello' Vue.js component
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Quiz from '@/components/Quiz'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz

    }
  ]
})
