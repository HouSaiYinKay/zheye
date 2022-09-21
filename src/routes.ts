import { createWebHistory, createRouter, useRoute } from 'vue-router';
import Home from './pages/home.vue'
import Login from './pages/login.vue'
import columnDetail from "./pages/ColumnDetail.vue";
import createPost from "./pages/createPost.vue";
import store from './store';
const routes = [
  { path: '/',name:'home', component: Home },
  { path: '/login',name:'login', component: Login,meta:{redirectAlreadyLogin:true}},
  { path: '/columnDetail/:id',name:'columnDetail', component: columnDetail },
  { path: '/create',name:'create', component: createPost,meta:{requiredLogin:true}}
]


const routerHistory = createWebHistory()
const router = createRouter({
  history:routerHistory,
  routes: routes
})
router.beforeEach((to,from,next) => {
 if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({name:'login'})
 }else if(to.meta.redirectAlreadyLogin && store.state.user.isLogin){
  next({name:'home'})
 }
 else {
  next()
 }
})
export default router