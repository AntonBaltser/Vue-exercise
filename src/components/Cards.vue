<script setup>

import {reactive, ref} from "vue";

const main = reactive( {
  card_1: [
    {
      id: 1,
      text: "Hallo",
      color: "red"
    },
    {
      id: 2,
      text: "hallo welt",
      color: "success"
    },
    {
      id: 3,
      text: "https://youtu.be/gwDoRPcPxtc",
      color: "orange darken-3"
    }
  ],
  card_2: [
    {
      id: 1,
      text: "wie gehts?",
      color: "red"
    },
    {
      id: 2,
      text: "was hast du vor?",
      color: "success"
    },
    {
      id: 3,
      text: "https://www.youtube.com/watch?v=u4ENF5OCtkY",
      color: "orange darken-3"
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

      <div class="mt-4 text-subtitle-2">With markup</div>
      <v-card
          v-for="(items, indexName) in main"
          width="400"
      >
        <v-card-header>
          <v-card-header-text>
            <v-card-title>{{indexName}}</v-card-title>
          </v-card-header-text>
        </v-card-header>
<!--        v-model="ex4"-->

        <v-card-text
            :id="indexName"
            v-for="(item, index) in items"
        >
<!--          <v-checkbox-->
<!--              :ref="el => { if (el) inputs[indexName][index] = el }"-->
<!--              :label="item.text"-->
<!--              :color="item.color"-->
<!--              :value="item.text"-->
<!--              :key="item.id"-->
<!--              @click="addValue"-->
<!--              hide-details-->
<!--          ></v-checkbox>-->

          <input
              :ref="el => { if (el) inputs[indexName][index] = el }"
              type="checkbox"
              :value="item.text"
              :key="item.id"
              @click="addValue"
          >
          <label
              :for="item.id"
          >
            {{ item.text }}
          </label>
        </v-card-text>
      </v-card>

  </v-container>
</template>





<!--    <fieldset-->
<!--        class="pa-3"-->
<!--        v-for="(items, indexName) in main"-->
<!--    >-->
<!--      <legend>-->
<!--        {{indexName}}-->
<!--      </legend>-->
<!--      <div-->
<!--          :id="indexName"-->
<!--          v-for="(item, index) in items"-->
<!--      >-->
<!--        <input-->
<!--            :ref="el => { if (el) inputs[indexName][index] = el }"-->
<!--            type="checkbox"-->
<!--            :value="item.text"-->
<!--            :key="item.id"-->
<!--            @click="addValue"-->
<!--        >-->
<!--        <label :for="item.id">-->
<!--          {{ item.text }}-->
<!--        </label>-->
<!--      </div>-->
<!--    </fieldset>-->
