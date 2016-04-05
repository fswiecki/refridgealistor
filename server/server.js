var express = require('express');
// var partials = require('express-partials')
// var bodyParser = require('body-parser');
var router = require('./routes.js');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/../client'));
app.use('/', router);
// app.use(partials());
// app.use(bodyParser());


module.exports = app;