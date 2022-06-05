const db = require('../db')
const Questions = db.questions
// const crypto = require("crypto")


module.exports = async (req, res) => {

    const limit = 6
    const from = req.params.list * limit - limit
  await  Questions.findAll(
      {
          offset: from,
          limit: limit
      }
  ).then(answer => {
          res.send(answer)
    })
 }


 /**************НЕ ТРОГАТЬ *************/
// for (let i = 0; i < answer.length; i++ ){
//     const sha1 = crypto.createHash("sha1")
//     sha1.update(answer[i].right_answer, "utf8")
//     answer[i]['right_answer'] = sha1.digest("base64")
// }
/***********************************************/