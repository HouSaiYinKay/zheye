import { createApp } from 'vue'
import App from './App.vue'
import {createWebHistory,createRouter} from 'vue-router'
import Home from './pages/home.vue'
import Login from './pages/login.vue'
import columnDetail from "./pages/ColumnDetail.vue";
import { createStore } from 'vuex'
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

const store = createStore (
  {
    state: {
      count:0
    },
    mutations:{
      add(state) {
        state.count++
      }
    }
  }
)

store.commit('add')
console.log(store.state.count)
const app = createApp(App)

app.use(router)

app.mount('#app')
