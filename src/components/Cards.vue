<script setup>
import {reactive, ref} from "vue";

const main = reactive({
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
  ], card_3: [
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
  card_4: [
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
  ],
})

let object = {}

for(let key in main)
  object[key] = []
const inputs = ref(object)

const out = {}

const addValue = (select) => {
  let valueItem = null

  const nameId = select.target.parentElement.id
  inputs.value[nameId].forEach(input => {
    if (select.target.classList[0] === input.classList[0])
      input.checked ? valueItem = input.value : valueItem = null
    else input.checked = false
  })
  out[nameId] = valueItem
  inputs.value[nameId] = []

  console.log(out)
}
</script>
<template>
  <v-container>
    <div class="text-subtitle-4 text-h4 text-center">Cards with value</div>
    <v-layout class="d-block d-md-flex">
      <v-row cols="6" class="mx-3 mb-15">
        <v-card
            color="#9575CD"
            elevation="15"
            class="mx-auto ma-3 text-white rounded-lg"
            v-for="(items, indexName, numberCard) in main"
            width="400"
        >
          <v-card-header>
            <v-card-header-text>
              <v-card-title
                  class="justify-center">
                {{ indexName }}
              </v-card-title>
            </v-card-header-text>
          </v-card-header>
          <v-card-text
              v-for="(item, index) in items"
          >
            <label :id="indexName">
              <input
                  :class="item.id + (!(numberCard % 2)  ? ' filled-in' : '')"
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
      </v-row>
    </v-layout>
  </v-container>
</template>
