const db = require('../db')
const Questions = db.questions

module.exports = async (req, res) => {

    const count = await Questions.count().then(count => count)
    res.send(JSON.stringify(count))
}