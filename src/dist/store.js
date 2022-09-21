"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var vuex_1 = require("vuex");
var testData_1 = require("./testData");
var store = vuex_1.createStore({
    state: {
        columns: testData_1.testData,
        posts: testData_1.testPosts,
        user: { isLogin: false }
    },
    mutations: {
        login: function (state) {
            state.user = __assign(__assign({}, state.user), { isLogin: true, name: 'myname' });
        }
    },
    getters: {
        biggerColumnsLen: function (state) {
            return state.columns.filter(function (c) { return c.id > 1; }).length;
        },
        getColumnById: function (state) { return function (id) {
            return state.columns.find(function (c) { return c.id === id; });
        }; },
        getPostsById: function (state) { return function (pid) {
            return state.posts.filter(function (p) { return p.id === pid; });
        }; }
    }
});
exports["default"] = store;
