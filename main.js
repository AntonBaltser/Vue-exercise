const App = {
    template: `   
  <fieldset v-for="(items, index) in main">
    <legend>{{index}}</legend>
    <div 
    :id="index"
     v-for="item in items"
     >
      <input
          :ref="index"
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
`,
    data(){
        return{
            main: {
                object_1: [
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
                ]
            }
            ,
            object_1: null,
            object_2: null,
            nameId: '',
            valueItem: null
        }
    },
    methods: {
        addValue(select) {

            this.nameId = select.target.parentElement.id
            this.$refs[this.nameId].forEach(input => {
                if (select.target.value === input.value)
                    input.checked ? this.valueItem = input.value : this.valueItem = null
                else input.checked = false
            })
            if(this.nameId === 'object_1') this.object_1 = this.valueItem
            else if(this.nameId === 'object_2') this.object_2 = this.valueItem

            console.log(this.object_1, this.object_2)

        }
    },
}

Vue.createApp(App).mount("#app")

