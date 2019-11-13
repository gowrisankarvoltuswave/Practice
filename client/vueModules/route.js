import Vue from 'vue'
import Router from 'vue-router'


import home from "./home.home.vue"
import about from "./about/about.vue"

export default new Router({
    routes: [{
            path: '/',
            name: home.name,
            component: home
        },
        {
            path: '/about',
            name: about.name,
            component: about
        }
    ]
})