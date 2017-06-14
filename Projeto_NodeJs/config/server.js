var express = require('express');
var app = express();

//View
app.set('view engine', 'ejs');
app.set('views', './app/views');

module.exports = app;