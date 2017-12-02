var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.post('/login', function (req, res, next) {

    User
        .getUser(req.body, function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows[0]);
            }
        });
});

router.post('/', function (req, res, next) {

    User
        .addUser(req.body, function (err, count) {

            console.log(req.body);
            if (err) {
                res.json(err);
            } else {
                res.json(req.body); //or return count for 1 & 0
            }
        });
});

module.exports = router;