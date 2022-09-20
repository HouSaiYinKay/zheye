"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var vue_router_1 = require("vue-router");
var home_vue_1 = require("./pages/home.vue");
var login_vue_1 = require("./pages/login.vue");
var ColumnDetail_vue_1 = require("./pages/ColumnDetail.vue");
var vuex_1 = require("vuex");
var routes = [
    { path: '/', component: home_vue_1["default"] },
    { path: '/login', component: login_vue_1["default"] },
    { path: '/columnDetail/:id', name: 'columnDetail', component: ColumnDetail_vue_1["default"] }
];
var routerHistory = vue_router_1.createWebHistory();
var router = vue_router_1.createRouter({
    history: routerHistory,
    routes: routes
});
var store = vuex_1.createStore({
    state: {
        count: 0
    },
    mutations: {
        add: function (state) {
            state.count++;
        }
    }
});
store.commit('add');
console.log(store.state.count);
var app = vue_1.createApp(App_vue_1["default"]);
app.use(router);
app.mount('#app');
