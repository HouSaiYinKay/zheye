"use strict";
exports.__esModule = true;
var vue_router_1 = require("vue-router");
var home_vue_1 = require("./pages/home.vue");
var login_vue_1 = require("./pages/login.vue");
var ColumnDetail_vue_1 = require("./pages/ColumnDetail.vue");
var createPost_vue_1 = require("./pages/createPost.vue");
var store_1 = require("./store");
var routes = [
    { path: '/', name: 'home', component: home_vue_1["default"] },
    { path: '/login', name: 'login', component: login_vue_1["default"], meta: { redirectAlreadyLogin: true } },
    { path: '/columnDetail/:id', name: 'columnDetail', component: ColumnDetail_vue_1["default"] },
    { path: '/create', name: 'create', component: createPost_vue_1["default"], meta: { requiredLogin: true } }
];
var routerHistory = vue_router_1.createWebHistory();
var router = vue_router_1.createRouter({
    history: routerHistory,
    routes: routes
});
router.beforeEach(function (to, from, next) {
    if (to.meta.requiredLogin && !store_1["default"].state.user.isLogin) {
        next({ name: 'login' });
    }
    else if (to.meta.redirectAlreadyLogin && store_1["default"].state.user.isLogin) {
        next({ name: 'home' });
    }
    else {
        next();
    }
});
exports["default"] = router;
