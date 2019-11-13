import Vue from 'vue'
import router from './route'
import App from './App.vue'



new Vue({
    el: '#myApp',
    router,
    template: '<App/>',
    components: { App },
    mount() {
        console.log('mount..!')
    }
})