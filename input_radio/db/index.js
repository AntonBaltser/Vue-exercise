const Sequelize = require('sequelize')

const sequelize = new Sequelize('VueExample', 'antony', 'bp024W12', {
    host: 'localhost',
    dialect:'mysql' })
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })

const questions = require('./questions')(sequelize)
const users = require('./users')(sequelize)
const authenticated = require('./authenticated')(sequelize)

module.exports = {
    sequelize,
    questions,
    users,
    authenticated
}