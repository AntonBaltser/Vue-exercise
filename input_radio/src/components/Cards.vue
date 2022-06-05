<script setup>

import {computed, ref} from 'vue'
import store from '../store'
import { useRoute } from 'vue-router';
const route = useRoute();

store.dispatch('setCardsState', {list: route.params.list})
import Pagination from "./Pagination.vue"


// console.log(route.path)

const main = store.getters.getCards

const object_1 = {}
const object_2 = {}
const object_3 = {}
let colorFinal = {}

 for(let key in main.cards){
    object_1[key] = ''
   object_2[key] = ''
   object_3[key] = ''

}

const select = ref(object_1)
const colorAnswer = ref(object_2)

const valueAnswer = computed( () => select.value)

const answerGiven = (answer) =>{
   const numberCard = Number(answer.target.name.split(' ')[0])
      if(main.rightAnswer[numberCard - 1] === answer.target.value) {
        colorAnswer.value[answer.target.name] = 'text-green'
      if(!object_3[answer.target.name]) {
        object_3[answer.target.name] = 'You winn'
        colorFinal[answer.target.name] = 'text-green'
      }
      }
      else {
        colorAnswer.value[answer.target.name] = 'text-red'
        if(!object_3[answer.target.name]) {
          object_3[answer.target.name] = 'You lose'
          colorFinal[answer.target.name] = 'text-red'
        }
      }
 }

</script>

<template>
  <v-row
      align="center"
      justify="space-around"
  >

  </v-row>
  <v-container>

    <v-card
        class="rounded-lg my-5"
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

          <v-card-title class="space-between">
            {{ cardName }}

            <div v-if="valueAnswer[cardName]"
                 class="mx-auto"
                  :class="colorAnswer[cardName]"
                >
              {{ valueAnswer[cardName] }}
<!--              <br>-->
            </div>
              <div :class="colorFinal[cardName]" >
                {{ object_3[cardName] }}
              </div>

          </v-card-title>

          <v-card-subtitle>{{ items.description }}</v-card-subtitle>
        </v-card-header-text>
      </v-card-header>
      <v-card-text>
        <v-checkbox
            v-for="item in items.questions"
            :name="cardName"
            :label="item.text"
            :color="main.color[Math.round(0.5 + Math.random() * main.color.length-1)]"
            :value="item.text"
            v-model="select[cardName]"
            @click="answerGiven"
            hide-details
        >
        </v-checkbox>
      </v-card-text>
    </v-card>
    </v-row>
      </v-layout>

    <Pagination/>

  </v-container>

</template>

<style scoped>
.title {
  background: -webkit-linear-gradient(rgba(246, 224, 51, 0.74), rgb(255, 255, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
