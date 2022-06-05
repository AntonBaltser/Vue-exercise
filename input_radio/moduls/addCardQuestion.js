const db = require('../db')
const Questions = db.questions

module.exports = async (req, res) => {

    const reqBody = req.body
console.log(reqBody)

    Questions.create({
        'name_card': reqBody.nameCard,
        'question': reqBody.question,
        'answer_1': reqBody.answer_1,
        'answer_2': reqBody.answer_2,
        'answer_3': reqBody.answer_3,
        'answer_4': reqBody.answer_4,
        'answer_5': reqBody.answer_5,
        'right_answer': reqBody.right_answer,
    })
    res.redirect('http://localhost:3000/cards/1')
}