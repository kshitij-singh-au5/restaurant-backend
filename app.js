var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

const db = require('./config/db')

var indexRouter = require('./routes/index');


var app = express();
app.use(cors())

db.authenticate()
    .then(() =>{
        console.log("connection done")
    })

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/",indexRouter)

module.exports = app;
