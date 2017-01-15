var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// DB
mongoose.connect('mongodb://localhost/rest_test');

// Models
var camping = require('../models/camping.js');

camping.methods(['get', 'post', 'put', 'delete']);
camping.register(router, '/camping');

module.exports = router;
