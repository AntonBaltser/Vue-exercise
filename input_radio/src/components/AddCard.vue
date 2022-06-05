<template>

  <v-layout class="d-block d-md-flex">
    <v-row cols="4"  class="mx-3 mb-15">
      <v-card
          width="400"
          color="#9575CD"
          elevation="15"
          class="mx-auto ma-3 text-white rounded-lg"
      >
        <v-card-header>
          <v-card-header-text>
            <v-card-title>
             Добавить карточку
            </v-card-title>
          </v-card-header-text>
        </v-card-header>

        <v-form method="post" action="http://localhost:8080/add" id="nativeForm" v-model="valid">

          <v-select

              :items="items"
              :rules="[v => !!v || 'Item is required']"
              label="Темы"
              name="nameCard"
              required
          ></v-select>

    <v-text-field
        :counter="150"
        :rules="nameRules"
        label="Вопрос"
        name="question"
        required
    ></v-text-field>
          <v-text-field
        :counter="150"
        :rules="nameRules"
        label="Ответ 1"
        name="answer_1"
        required
    ></v-text-field>
          <v-text-field
        :counter="150"
        :rules="nameRules"
        label="Ответ 2"
        name="answer_2"
        required
    ></v-text-field>
          <v-text-field
        :counter="150"
        :rules="nameRules"
        label="Ответ 3"
        name="answer_3"
        required
    ></v-text-field>
          <v-text-field
        :counter="150"
        :rules="nameRules"
        label="Ответ 4"
        name="answer_4"
        required
    ></v-text-field>
          <v-text-field
        :counter="150"
        :rules="nameRules"
        label="Ответ 5"
        name="answer_5"
        required
    ></v-text-field>
          <v-text-field
              :counter="150"
              :rules="nameRules"
              label="Правильный ответ"
              name="right_answer"
              required
          ></v-text-field>

          <v-btn @click="submit" :disabled="!valid">submit</v-btn>

          <router-link to="/">
            <v-btn
                flat
                disabled
            >
              Нащад
            </v-btn>
          </router-link>
    <v-btn
        color="error"
        class="mr-4"
        @click="reset"
    >
      Reset Form
    </v-btn>

  </v-form>

      </v-card>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    // name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 200) || 'Name must be less than 10 characters',
    ],
    // email: '',
    // emailRules: [
    //   v => !!v || 'E-mail is required',
    //   v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    // ],
    select: null,
    items: [
      'История',
      'География',
      'Немецкий',
      'Математика',
    ],

  }),

  methods: {
    submit () {
      nativeForm.submit()
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>



<style scoped>

</style>