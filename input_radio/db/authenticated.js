const Sequelize = require('sequelize');

module.exports = function (sequelize){
    return sequelize.define('authenticated',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        login: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cookie: {
            type: Sequelize.STRING,
            allowNull: false
        },
        time_login: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },{
        timestamps: false,
        tableName: 'authenticated'
    });
}