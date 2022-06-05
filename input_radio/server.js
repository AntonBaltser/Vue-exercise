const express = require('express')
const server = express()
const cookieParser = require('cookie-parser')

const setCardsQuestions = require('./moduls/getCardsQuestions')
const setHeaders = require('./moduls/setHeaders')
const auth = require('./moduls/auth')
const registration = require('./moduls/registration')
const addCardQuestion = require('./moduls/addCardQuestion')
const setCountCards = require('./moduls/getCountCards')

server.use(cookieParser())
server.use(express.json());
server.use(express.urlencoded());

server.all('*', (req, res, next) => {
    setHeaders(req, res, next)
});

server.post('*',  async (req, res) => {
    console.log(req.url)
    switch(req.url){
        case '/auth':
            return  auth(req, res)
        case '/registration':
            return ( registration(req, res) ?  res.redirect('http://localhost:3000/auth') : res.send(false) )
        case '/add':
            return  addCardQuestion(req, res)
        default:
            return res.redirect('http://localhost:3000/')
    }
})

server.get('/', async (req, res) => await setCountCards(req, res) )

server.get('/cards/:list', async (req, res) => {

    switch(req.url) {
        case `/cards/${req.params.list}`:
                return(setCardsQuestions(req, res))
            default:
        return res.redirect('http://localhost:3000/cards')
    }
    })


let port = process.env.PORT;
if (port == null || port === "") {
    port = 8080;
}
server.listen(port, () => {
    console.log('Server working >>>>>>', port )
});