<script setup>
import {computed, ref} from "vue"
import store from "../store"
import { useRouter } from 'vue-router';
const router = useRouter();

const number = ref(1)
const page = computed(() => {
      router.push(`/cards/${number.value}`)
  return store.dispatch('setCardsState',{list: number.value})
    }
)

const countCards = store.getters.getCountCards
const countPage = Math.ceil(countCards / 6)

</script>

<template>
  <div class="text-center">
    {{page.list}}
    <v-pagination
        v-model="number"
        :length="countPage"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
</template>


<style scoped>

</style>