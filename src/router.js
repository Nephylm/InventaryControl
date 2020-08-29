import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';


Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path: '/setup',
            name: 'setup',
            component: () => import('./views/setup/Setup.vue')
        },
        {
            path:'/orden_de_compra',
            name:'orden_de_compra',
            component: () => import('./views/orden_compra/Orden de compra.vue')
        }
    ]
})