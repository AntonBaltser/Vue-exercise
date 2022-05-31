const App = {
    template: `   
    <fieldset>
      <legend>Übung:</legend>
      <div id="form1" v-for="item in object_1">
    <input
        ref="check_1"
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
      </div>
    </fieldset>
  <hr>
  <br>
  <fieldset>
    <legend>Übung_2:</legend>
    <div id="form2" v-for="item in object_2">
      <input
          ref="check_2"
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
    </div>
  </fieldset>`,

    data(){
        return{
            object_1:[
                {
                    id: 338,
                    text: "Hallo",
                    creationDate: "2022-05-29 23:26:36"
                },
                {
                    id: 341,
                    text: "hallo welt",
                    creationDate: "2022-05-30 21:28:39"
                },
                {
                    id: 303,
                    text: "https://youtu.be/gwDoRPcPxtc",
                    creationDate: "2022-05-24 11:35:52"
                }
            ],
            object_2: [
                {
                    id: 338,
                    text: "wie gehts?",
                    creationDate: "2022-05-29 23:26:36"
                },
                {
                    id: 341,
                    text: "was hast du vor?",
                    creationDate: "2022-05-30 21:28:39"
                },
                {
                    id: 303,
                    text: "https://www.youtube.com/watch?v=u4ENF5OCtkY",
                    creationDate: "2022-05-24 11:35:52"
                }
            ],
            form1: null,
            form2: null,
        }
    },
    methods: {
        addValue(select) {
            if (select.target.parentElement.id === 'form1') this.$refs.check_1.forEach(input => {
                if (select.target.value === input.value)
                    input.checked ? this.form1 = input.value : this.form1 = null
                else {
                    input.checked = false
                }
            })
            else if (select.target.parentElement.id === 'form2') this.$refs.check_2.forEach(input => {
                if (select.target.value === input.value)
                    input.checked ? this.form2 = input.value : this.form2 = null
                else {
                    input.checked = false
                }
            })
            console.log(this.form1, this.form2)
        }
    },
}

Vue.createApp(App).mount("#app")

