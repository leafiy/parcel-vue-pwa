import Vue from 'vue/dist/vue.esm.js'
import Router from 'vue-router/dist/vue-router.esm.js'
import HelloWorld from '../components/HelloWorld'
import Offline from '../components/Offline.vue'
import DefaultPage from '../components/404.vue'

Vue.use(Router)
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    } else {
        return { x: 0, y: 0 }
    }
}
const routes = [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/offline',
        component: Offline,
        name: 'Offline'
    },
    {
        path: '/404',
        component: DefaultPage,
        name: '404'
    }
]

const router = new Router({
    mode: 'history',
    scrollBehavior,
    base: '/',
    routes,
})

export default router;