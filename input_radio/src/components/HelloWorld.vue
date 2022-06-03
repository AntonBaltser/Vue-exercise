<script setup>
import {computed, ref} from "vue";

const main = {
  title: 'card with different questions',
  color: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],
  cards:{
    card_1: {
      description: 'bla bla bla',
      questions: [
        {
          text: 'Chat',
          id: 1,
        },
        {
          text: 'Made with Vuetify',
          id: 2,
        },
        {
          text: 'Twitter',
          id: 3,
        },
        {
          text: 'Articles',
          id: 4,
        },
      ]
    },
    card_2: {
      description: 'bla bla bla',
      questions: [
        {
          text: 'Chat2',
          id: 1,
        },
        {
          text: 'Made with Vuetify2',
          id: 2,
        },
        {
          text: 'Twitter2',
          id: 3,
        },
        {
          text: 'Articles3',
          id: 4,
        },
      ]
    },
    card_3: {
      description: 'bla bla bla',
      questions: [
        {
          text: 'Chat2',
          id: 1,
        },
        {
          text: 'Made with Vuetify2',
          id: 2,
        },
        {
          text: 'Twitter2',
          id: 3,
        },
        {
          text: 'Articles3',
          id: 4,
        },
      ]
    }
  }
 }
const object_1 = {}

 for(let key in main.cards)
    object_1[key] = ''

const select = ref(object_1)

const value = computed( () => {
  return select.value
})

</script>

<template>
  <v-container>
    <v-card
        class="rounded-lg"
        color="#000000"
        elevation="15"
    >
      <div  class="mb-6 text-h4 text-center title">{{ main.title }}</div>
    </v-card>

    <v-layout class="d-block d-md-flex">
    <v-row cols="4"  class="mx-3 mb-15">
    <v-card
        width="400"
        color="#9575CD"
        elevation="15"
        class="mx-auto ma-3 text-white rounded-lg"
        v-for="(items, cardName) in main.cards"
    >
      <v-card-header>
        <v-card-header-text>
          <v-card-title>
            {{ cardName }}
            <div v-if="value[cardName]" class="mx-auto">
              {{ value[cardName] }}
            </div>
          </v-card-title>
          <v-card-subtitle>{{ items.description }}</v-card-subtitle>
        </v-card-header-text>
      </v-card-header>
      <v-card-text>
        <v-checkbox
            v-for="item in items.questions"
            :label="item.text"
            :color="main.color[Math.round(0.5 + Math.random() * main.color.length-1)]"
            :value="item.text"
            v-model="select[cardName]"
            hide-details
        >
        </v-checkbox>
      </v-card-text>
    </v-card>
    </v-row>
      </v-layout>
  </v-container>
</template>

<style scoped>
.title {
  background: -webkit-linear-gradient(rgba(246, 224, 51, 0.74), rgb(255, 255, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
</style>
