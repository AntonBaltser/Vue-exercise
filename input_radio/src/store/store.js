import axios from "axios";
import { reactive } from "vue";

export default {
    actions: {
      async  countCards({commit}){
            const count = await axios.get(`http://localhost:8080/`)
                commit('addCountCards', count.data)
        },
        async setCardsState({commit}, param) {
          console.log(param)
            const data = await axios.get(`http://localhost:8080/cards/${param.list}`)
            commit('addQuestionsMutation', data.data)
        },

    },
    mutations: {
        // addProfile(state, proFile) {
        //     state.proFile = proFile
        // },
        addCountCards(state, count) {
            state.countCards = count
        },
        addQuestionsMutation(state, questions) {
                    // console.log(questions)
            state.cardsMain.rightAnswer = []
            state.cardsMain.cards = {}

            for(let i = 1; i < questions.length + 1; i++){
                state.cardsMain.rightAnswer.push(questions[i -1].right_answer)

                let arrQuestions = []
                let k = 1
                for(let key in questions[i - 1]){
                    if(/^answer_/.test(key) && questions[i -1][key] !== ''){
                        let textQuestions = {}
                        textQuestions['text'] = questions[i -1][key]
                        textQuestions['id'] = k
                        arrQuestions.push(textQuestions)
                        k++
                    }
                }
                // console.log(questions[i - 1].id)
                state.cardsMain.cards[i + ' ' + questions[i - 1].name_card] = {
                    description: questions[i - 1].question,
                    questions: []
                }
                state.cardsMain.cards[i + ' ' + questions[i - 1].name_card].questions = arrQuestions
            }
        },
    },
    state:  () => reactive({
        proFile: '',
        countCards: '',
        cardsMain: {
            title: 'card with different questions',
            color: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],
            cards: {},
            rightAnswer: []
        }
    }),
    getters: {
        getCards:  state =>  state.cardsMain,
        getCountCards: state => state.countCards

    },
}