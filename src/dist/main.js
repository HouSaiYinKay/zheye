"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var vue_router_1 = require("vue-router");
var home_vue_1 = require("./pages/home.vue");
var login_vue_1 = require("./pages/login.vue");
var ColumnDetail_vue_1 = require("./pages/ColumnDetail.vue");
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
// 5. 创建并挂载根实例
var app = vue_1.createApp(App_vue_1["default"]);
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router);
app.mount('#app');
