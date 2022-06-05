<template>

  <v-layout class="d-block d-md-flex">
    <v-row cols="4"  class="mx-3 mb-15">
      <v-card
          width="400"
          color="#9575CD"
          elevation="15"
          class="mx-auto mt-16 text-white rounded-lg"

      >
        <v-card-header>


          <v-card-header-text>
            <v-card-title>
              Forma аутентификации
            </v-card-title>
              </v-card-header-text>
          </v-card-header>


        <v-form method="post" action="http://localhost:8080/auth" id="nativeForm" v-model="valid">
          <v-container>
            <v-row  class="justify-center">
              <v-col
                  cols="10"
              >
          <v-text-field
              label="Name"
              v-model="name"
              :rules="nameRules"
              :counter="10"
              required
              name="email"
          ></v-text-field>
          <v-text-field
              label="Password"
              v-model="email"
              :rules="emailRules"
              required
              name="password"
          ></v-text-field>

              </v-col>
            </v-row>
          </v-container>
          <v-btn @click="submit" :disabled="!valid">Войти</v-btn>

          <router-link to="/">
            <v-btn
                flat
                disabled
            >
              Нащад
            </v-btn>
          </router-link>

        </v-form>





            </v-card>
      </v-row>
    </v-layout>
</template>

<script>
import store from "../store";

export default {
  name: 'contact',

  data () {
    return {
      valid: false,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 20 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    submit() {
      nativeForm.submit()
      // store.dispatch('auth', {name: this.name, email: this.email})

    }
  }
}
</script>

<style scoped>

</style>