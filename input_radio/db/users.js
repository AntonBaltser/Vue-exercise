const Sequelize = require('sequelize');

module.exports = function (sequelize){
    return sequelize.define('users',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        time_stamp: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },{
        timestamps: false,
        tableName: 'users'
    });
}