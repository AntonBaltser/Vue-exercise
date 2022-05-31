const App = {
    template: `   
    <fieldset>
      <legend>Übung:</legend>
      <div id="form1" v-for="select in selects">
    <input
        ref="check"
        type="checkbox"
        :value="select.text"
        :key="select.id"
        @click="addValue"
    >
    <label
        :for="select.id"
    >
      {{ select.text }}
    </label>
      </div>
    </fieldset>
  <hr>
  <br>
  <fieldset>
    <legend>Übung_2:</legend>
    <div id="form2" v-for="select in selects1">
      <input
          ref="check1"
          type="checkbox"
          :value="select.text"
          :key="select.id"
          @click="addValue"
      >
      <label
          :for="select.id"
      >
        {{ select.text }}
      </label>
    </div>
  </fieldset>`,

    data(){
        return{
            selects:[
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
            selects1: [
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
        }
    },
    methods: {
        addValue(memory1) {
            if (memory1.target.parentElement.id === 'form1') this.$refs.check.forEach(input => input.checked = false)
            else if (memory1.target.parentElement.id === 'form2') this.$refs.check1.forEach(input => input.checked = false)
            memory1.target.checked = true
            console.log(memory1.target.value)
        }
    },
}

Vue.createApp(App).mount("#app")

