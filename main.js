const App = {
    template: `   
    <fieldset>
      <legend>Übung:</legend>
      <div v-for="select in selects">
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
        }
    },
    methods: {
        addValue(input) {
            this.$refs.check.forEach(input => input.checked = false)
            input.target.checked = true
            console.log(input.target.value)
        }
    }
}

Vue.createApp(App).mount("#app")

