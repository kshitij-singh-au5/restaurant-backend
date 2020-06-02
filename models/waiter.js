const db = require('../config/db')
const Seque = require('sequelize')

let waiterTable = db.define('waiter',{
    waiterName: {
        type: Seque.STRING
    },
    waiterAge: {
        type: Seque.STRING
    },
    waiterMobile: {
        type: Seque.STRING
    },
    waiterRatings: {
        type: Seque.STRING
    },
    waiterExperience: {
        type: Seque.STRING
    }
})

module.exports = waiterTable