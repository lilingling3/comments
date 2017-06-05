import Vue from 'vue'
import Router from 'vue-router'
import Comment from '../App.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'comment',
      component: Comment
    }
  ]
})
