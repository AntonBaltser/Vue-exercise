<script setup>
import {reactive, ref} from "vue";
const main = reactive( {
  card_1: [
    {
      id: 1,
      text: "Hallo",
    },
    {
      id: 2,
      text: "hallo welt",
    },
    {
      id: 3,
      text: "https://youtu.be/gwDoRPcPxtc",
    }
  ],
  card_2: [
    {
      id: 1,
      text: "wie gehts?",
    },
    {
      id: 2,
      text: "was hast du vor?",
    },
    {
      id: 3,
      text: "https://youtu.be/watch?v=u4ENF5OCtkY",
    }
  ]
})
let object = {
  card_1: [],
  card_2: []
}
let object_1 = null
let object_2 = null
let valueItem = null

const inputs = ref(object)
const addValue = (select) => {

  const nameId = select.target.parentElement.id
  inputs.value[nameId].forEach(input => {
    if (select.target.value === input.value)
      input.checked ? valueItem = input.value : valueItem = null
    else input.checked = false
  })
  if(nameId === 'card_1') object_1 = valueItem
  else if(nameId === 'card_2')  object_2 =valueItem
  console.log(object_1, object_2)
  inputs.value[nameId] = []
}
</script>
<template>
  <v-container>
    <div class="text-subtitle-4 text-h4 text-center">Cards with value</div>
    <v-layout class="d-block d-md-flex">
    <v-card
        color="#9575CD"
        elevation="15"
        class="mx-auto ma-3 text-white  rounded-lg"
        v-for="(items, indexName) in main"
        width="400"
    >
      <v-card-header>
        <v-card-header-text>
          <v-card-title
              class="justify-center">
            {{indexName}}
          </v-card-title>
        </v-card-header-text>
      </v-card-header>
      <v-card-text
          v-for="(item, index) in items"
      >
        <label :id="indexName">
        <input
            :class="indexName === 'card_1' ? 'filled-in' : ''"
            :ref="el => { if (el) inputs[indexName][index] = el }"
            type="checkbox"
            :value="item.text"
            @click="addValue"
        >
          <span class="text-white">
            {{ item.text }}
          </span>
        </label>
      </v-card-text>
    </v-card>
    </v-layout>
  </v-container>
</template>
