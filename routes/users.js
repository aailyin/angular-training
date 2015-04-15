var express = require('express');
var router = express.Router();
var userService = require('../service/users.service');


router.get('/users', function (req, res){
    var personsStr = JSON.stringify(userService.getPersons());
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Length', personsStr.length);
    res.end(personsStr);
});

router.delete('/users/:id', function (req, res){
    var personsStr = JSON.stringify(userService.deletePerson(req.params.id));
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Length', personsStr.length);
    res.end(personsStr);
});

router.post('/users', function (req, res){
    var person = req.body.person

    //TODO: add functionality to save new person and return all array
});

module.exports = router;
