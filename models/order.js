const db = require('../config/db')
const Seque = require('sequelize')
const menus = require('./menu')
const waiters = require('./waiter')
const tables = require('./table')


let orderTable = db.define('order',{
    userName: {
        type: Seque.STRING
    },
    userMobile: {
        type: Seque.STRING
    },
    itemsOrdered: {
        type: Seque.ARRAY(Seque.JSONB)
    },
    totalPrice: {
        type: Seque.STRING
    },
    paymentMode: {
        type: Seque.STRING
    }
})

waiters.hasMany(orderTable,{foreignKey: 'waiterId', sourceKey: 'id'})
orderTable.belongsTo(waiters,{foreignKey: 'waiterId', targetKey: 'id'})

tables.hasMany(orderTable,{foreignKey: 'tableId', sourceKey: 'id'})
orderTable.belongsTo(tables,{foreignKey: 'tableId', targetKey: 'id'})

// menus.hasMany(orderTable,{foreignKey: 'itemId', sourceKey: 'id'})
// orderTable.belongsTo(menus,{foreignKey: 'itemId', sourceKey: 'id'})
db.sync({force:true})

module.exports = orderTable