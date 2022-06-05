const hashingPassword = require("./mixins/hashingPassword")
// const token = require('./mixins/coockieCreator')()
const db = require('../db')
const Users = db.users;

module.exports =  (req, res) =>{
    const reqBody = req.body
    console.log(reqBody)
    Users.create({
        'user_name': reqBody.name,
        'user_email': reqBody.email,
        'user_password': hashingPassword(reqBody.email, reqBody.password),
        // 'avatarURL': 'http://localhost:9000/project/registration/users/' + reqBody.fileName,
        // 'country':  reqBody.country,

    })
// console.log(token)
    // res.cookie('token', token, { maxAge: 3600000, path: '/' });
    // res.cookie('login', reqBody.name, { maxAge: 3600000, path: '/' });

    return true
}