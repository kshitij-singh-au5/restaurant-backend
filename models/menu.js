const db = require('../config/db')
const Seque = require('sequelize')

let menuTable = db.define('menu',{
    itemName: {
        type: Seque.STRING
    },
    cuisineName: {
        type: Seque.STRING
    },
    vegEggNonVeg: {
        type: Seque.STRING
    },
    itemPrice: {
        type: Seque.STRING
    }
})

module.exports = menuTable