var express = require('express');
var router = require('./routes.js');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/../client'));
app.use('/', router);

module.exports = app;