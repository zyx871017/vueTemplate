import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from 'page/Home.vue';
import Food from 'page/Food.vue';
import App from './src/App.vue';
import './src/static/css/common.css';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {name: 'default', path: '*', redirect: {name: 'home'}},
        {name: 'home', path: '/', component: Home},
        {name: 'food', path: '/food', component: Food}
    ]
});

new Vue({
    el: '#root',
    router,
    render: (h) => h(App)
});