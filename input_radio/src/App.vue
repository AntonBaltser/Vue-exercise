<script setup>
import store from "./store"
store.dispatch('countCards')
// import HelloWorld from './components/Cards.vue'

</script>

<template>
  <v-app>

    <v-navigation-drawer
        app
        left
        v-model="drawer"
    >
        <v-list-item v-for="item in menu_items" :key="item.id">
          <v-list-item-title>
            <router-link :to="item.url">{{ item.name }}</router-link>
          </v-list-item-title>
        </v-list-item>

    </v-navigation-drawer>

    <v-app-bar
        elevation="20"
        style="background: linear-gradient(to right, #9575CD, pink);"
        class="position-absolute text-white"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-app-bar-title>
        <h3 class="text-h4 white--text">iFood</h3>
      </v-app-bar-title>

    </v-app-bar>

    <v-main style="background: linear-gradient(#ff6363, rgba(161, 11, 11, 0.78), rgba(95, 63, 232, 0.7))">

      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    menu_items: [
      {
        id: 0,
        name: 'На главную',
        url: '/'
      },
      {
        id: 1,
        name: 'Карточки ',
        url: '/cards/1'
      },      {
        id: 2,
        name: 'Зарегистрироваться ',
        url: '/registration'
      },
      {
        id: 3,
        name: 'Войти',
        url: '/auth'
      },
      {
        id: 4,
        name: 'Добавить карточку',
        url: '/add'
      }
    ]
  })
}
</script>