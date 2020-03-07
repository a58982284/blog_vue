import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import aaa from '@/components/aaa'
import AddBlog from '@/components/addBlog'
import Settingbloglist from '@/components/bloglist'
import SettingHeader from '@/components/Header'
import article from '@/components/article'
import login from '@/components/login'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    // component: HelloWorld
    components: {
      myHeader: SettingHeader,
      mybloglist: Settingbloglist,
  }
},
  {
    path: '/aaa',
    name: 'aaa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: aaa
  },
  {
    path: '/player/:uid',
    name: 'Player',
    component: aaa
},
{ /*添加博客*/
  path: '/addBlog',
  component: AddBlog
},
{
  path:'/article/:uid',
  component:article
},
{
  path:'/login',
  component:login
}
]

const router = new VueRouter({
  mode:'history',
  routes
})


// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');
 
//     if (token === null || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });


export default router
