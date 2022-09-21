"use strict";
exports.__esModule = true;
var vue_router_1 = require("vue-router");
var home_vue_1 = require("./pages/home.vue");
var login_vue_1 = require("./pages/login.vue");
var ColumnDetail_vue_1 = require("./pages/ColumnDetail.vue");
var routes = [
    { path: '/', name: 'home', component: home_vue_1["default"] },
    { path: '/login', component: login_vue_1["default"] },
    { path: '/columnDetail/:id', name: 'columnDetail', component: ColumnDetail_vue_1["default"] }
];
var routerHistory = vue_router_1.createWebHistory();
var router = vue_router_1.createRouter({
    history: routerHistory,
    routes: routes
});
exports["default"] = router;