const Sequelize = require('sequelize');

module.exports = function (sequelize){
    return sequelize.define('questions',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name_card: {
            type: Sequelize.STRING,
            allowNull: false
        },
        question: {
            type: Sequelize.STRING,
            allowNull: false
        },
        answer_1: {
            type: Sequelize.STRING,
            allowNull: false
        },
        answer_2: {
            type: Sequelize.STRING,
            allowNull: false
        },
        answer_3: {
            type: Sequelize.STRING,
            allowNull: false
        },
        answer_4: {
            type: Sequelize.STRING,
            allowNull: false
        },
        answer_5: {
            type: Sequelize.STRING,
            allowNull: false
        },
        right_answer: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },{
        timestamps: false,
        tableName: 'questions'
    });
}