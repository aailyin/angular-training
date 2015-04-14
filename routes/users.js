var express = require('express');
var router = express.Router();
var userService = require('../service/users.service');


router.get('/users', function (req, res){
    var personsStr = JSON.stringify(userService.getPersons());
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Length', personsStr.length);
    res.end(personsStr);
});

module.exports = router;
