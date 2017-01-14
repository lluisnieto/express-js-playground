var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// DB
mongoose.connect('mongodb://localhost/rest_test');

// Models
var camping = require('../models/camping.js');

camping.methods(['get', 'post']);
camping.register(router, '/camping');

/*
dummy

{
    "name": "asdf",
    "phone": 123123,
    "email": "lluis@lluis.com",
    "adress": "fake street 123",
    "location": {
        "lat": 123,
        "lon": 456
    }
}

*/


module.exports = router;
