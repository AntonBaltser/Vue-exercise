import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import  store from './store'
import { createRouter, createWebHistory } from "vue-router";


const routes = [
    { path: '/', component:() => import('./components/Home.vue')},
    { path: '/cards/:list', component:() => import('./components/Cards.vue')},
    { path: '/add', component:() => import('./components/AddCard.vue')},
    { path: '/auth', component:() => import('./components/Auth.vue')},
    { path: '/registration', component:() => import('./components/FormRegistration.vue')},
    // { path: '/*', component:() => import('./components/Cards.vue')},
];
const router = createRouter({
    history: createWebHistory(),
    routes
})


loadFonts()

createApp(App)
  .use(vuetify)
    .use(store)
    .use(router)

  .mount('#app')
