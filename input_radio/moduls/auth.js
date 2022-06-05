const hashingPassword = require("./mixins/hashingPassword");
const db = require('../db');
const Users = db.users;
const authenticated = db.authenticated;
const token = require('./mixins/coockieCreator')()

module.exports = async (req, res) => {

    const body = req.body
    console.log(body)
    let login = '';
    const loginAuth = await Users.findOne({
        where: {
            'user_email': body.email,
            'user_password': hashingPassword(body.email, body.password)
        },
    })
        .then(answer => {
            login = answer?.user_name || 'no_login'
            return answer !== null
        })
        .then(bool => {
            console.log(bool)
            return bool
        });
    if(loginAuth === true) {

        res.cookie('token', token, { maxAge: 3600000, path: '/' });
        res.cookie('login', login, { maxAge: 3600000, path: '/' });
        res.redirect('http://localhost:3000/')

        await authenticated.create({
            'login': login,
            'cookie': token
        })
        // return login
    }
    // else return login
}