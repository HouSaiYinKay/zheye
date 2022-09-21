import {createWebHistory,createRouter} from 'vue-router'
import Home from './pages/home.vue'
import Login from './pages/login.vue'
import columnDetail from "./pages/ColumnDetail.vue";

const routes = [
  { path: '/',name:'home', component: Home },
  { path: '/login', component: Login },
  { path: '/columnDetail/:id',name:'columnDetail', component: columnDetail }
]
const routerHistory = createWebHistory()
const router = createRouter({
  history:routerHistory,
  routes: routes
})

export default router