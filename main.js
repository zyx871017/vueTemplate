import Vue from 'vue';
import VueRouter from 'vue-router';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css'
import Home from 'page/Home.vue';
import ReactPage from 'page/React.vue';
import VuePage from 'page/Vue.vue';
import App from './src/App.vue';
import EditorPage from 'page/EditorPage.vue';
import './src/static/css/common.css';

Vue.use(VueRouter);
Vue.use(mavonEditor);

const router = new VueRouter({
    routes: [
        {name: 'default', path: '*', redirect: {name: 'home'}},
        {name: 'home', path: '/', component: Home},
        {name: 'vue', path: '/vue', component: VuePage},
        {name: 'react', path: '/react', component: ReactPage},
        {name: 'editor', path: '/editor', component: EditorPage}
    ]
});

new Vue({
    el: '#root',
    router,
    render: (h) => h(App)
});