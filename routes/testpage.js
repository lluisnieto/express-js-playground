var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var blocks = ['Fixed', 'Movable', 'Rotating'];
    res.send(blocks);

});

module.exports = router;
