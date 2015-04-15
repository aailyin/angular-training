"use strict";

//Requires
var express = require('express');
var router = express.Router();
var userService = require('../service/users.service');

//Exports
module.exports = router;

//Setup routing
router.get('/users', function (req, res){
    var personsStr = JSON.stringify(userService.getPersons());
    sendJSON(personsStr, res)
});

router.delete('/users/:id', function (req, res){
    var personsStr = JSON.stringify(userService.deletePerson(req.params.id));
    sendJSON(personsStr, res);
});

router.post('/users/:id', function (req, res){
    var personsStr = JSON.stringify(userService.updatePerson(req.params.id, req.body));
    sendJSON(personsStr, res);
});

router.post('/users', function (req, res){
    var personsStr = JSON.stringify(userService.addPerson(req.body));
    sendJSON(personsStr, res);
});

///////////////////////////////
//Othee necessary functions
function sendJSON(json, res){
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Length', json.length);
    res.end(json);
}