<template>
  <v-layout class="d-block">
    <v-row   class="mx-3 my-auto">
      <v-card
          width="400"
          color="#9575CD"
          elevation="15"
          class="mx-auto my-10 text-white rounded-lg"

      >
        <v-card-header>


          <v-card-header-text>
            <v-card-title>
              Forma регистрации
            </v-card-title>
          </v-card-header-text>
        </v-card-header>


        <v-form method="post" action="http://localhost:8080/registration" id="nativeForm" v-model="valid">
    <v-container>
      <v-row  class="justify-center">
        <v-col
            cols="10"
        >
          <v-text-field
              name="name"
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="Login"
              required
          ></v-text-field>


          <v-text-field
              name="email"
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
          ></v-text-field>


          <v-text-field
              name="password"
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Password"
              required
          ></v-text-field>

          <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Password repeat"
              required
          ></v-text-field>


        </v-col>
      </v-row>
    </v-container>
        <v-layout class="mb-6 justify-space-around">
          <v-btn
              @click="submit"
              :disabled="!valid"
              color="secondary"
          >
            Зарегистрироваться

          </v-btn>

          <router-link to="/">
            <v-btn
                flat
                disabled
            >
            Назад
            </v-btn>
          </router-link>
    </v-layout>


        </v-form>
      </v-card>
    </v-row>
  </v-layout>

</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    submit() {
      nativeForm.submit()
      // store.dispatch('auth', {name: this.name, email: this.email})

    }
  }
}
</script>