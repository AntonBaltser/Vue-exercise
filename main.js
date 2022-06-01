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
                    },
                    {
                        id: 341,
                        text: "hallo welt",
                    },
                    {
                        id: 303,
                        text: "https://youtu.be/gwDoRPcPxtc",
                    }
                ],
                object_2: [
                    {
                        id: 338,
                        text: "wie gehts?",
                    },
                    {
                        id: 341,
                        text: "was hast du vor?",
                    },
                    {
                        id: 303,
                        text: "https://www.youtube.com/watch?v=u4ENF5OCtkY",
                    }
                ]
            }
            ,
            object_1: null,
            object_2: null,
            valueItem: null
        }
    },
    methods: {
        addValue(select) {
            const nameId = select.target.parentElement.id

            this.$refs[nameId].forEach(input => {
                if (select.target.value === input.value)
                    input.checked ? this.valueItem = input.value : this.valueItem = null
                else input.checked = false
            })
            if(nameId === 'object_1') this.object_1 = this.valueItem
            else if(nameId === 'object_2') this.object_2 = this.valueItem

            console.log(this.object_1, this.object_2)
        }
    },
}

Vue.createApp(App).mount("#app")