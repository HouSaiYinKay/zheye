import { createApp } from 'vue'
import App from './App.vue'
import {createWebHistory,createRouter} from 'vue-router'
import Home from './pages/home.vue'
import Login from './pages/login.vue'
import columnDetail from "./pages/ColumnDetail.vue";
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/columnDetail/:id',name:'columnDetail', component: columnDetail }
]
const routerHistory = createWebHistory()
const router = createRouter({
  history:routerHistory,
  routes: routes
})

// 5. 创建并挂载根实例
const app = createApp(App)
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)

app.mount('#app')
