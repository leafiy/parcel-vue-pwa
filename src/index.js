import Vue from 'vue/dist/vue.esm.js'
import App from './app.vue'
import router from './router'
import store from './store/index'
import './assets/style/style.css'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});


