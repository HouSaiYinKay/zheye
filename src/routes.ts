import {createWebHistory,createRouter} from 'vue-router'
import Home from './pages/home.vue'
import Login from './pages/login.vue'
import columnDetail from "./pages/ColumnDetail.vue";
import createPost from "./pages/createPost.vue";
const routes = [
  { path: '/',name:'home', component: Home },
  { path: '/login', component: Login },
  { path: '/columnDetail/:id',name:'columnDetail', component: columnDetail },
  { path: '/create',name:'create', component: createPost }
]
const routerHistory = createWebHistory()
const router = createRouter({
  history:routerHistory,
  routes: routes
})

export default router