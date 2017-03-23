import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './router/router.config.js'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'

Vue.use(Mint);
Vue.use(VueRouter);
//关于axios配置
axios.interceptors.request.use(function(config) { //发送请求
     Mint.Indicator.open('加载中...');
    return config;
}, function(error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response) { //请求回来
    Mint.Indicator.close();
    return response;
}, function(error) {
    return Promise.reject(error);
});

Vue.prototype.$http = axios; //把axios对象挂到Vue原型上
const router = new VueRouter({
    mode: 'history',
    routes
    }
);

new Vue({
    router,
    el: '#app',
    render: h => h(App),
    mounted(){
        
    }
})