const Sequelize = require('sequelize')

const db = new Sequelize("postgres://ighhtwhq:Ki1WFOrHPatoMOdG4nqUDIwyQ6pX1zto@ruby.db.elephantsql.com:5432/ighhtwhq", {
    logging: false
})

db.sync()

module.exports = db