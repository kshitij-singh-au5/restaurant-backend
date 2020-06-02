const db = require('../config/db')
const Seque = require('sequelize')

let tableTable = db.define('table',{
    seating: {
        type: Seque.STRING
    },
    tableName: {
        type: Seque.STRING
    },
    floorNumber: {
        type: Seque.STRING
    }
})

module.exports = tableTable