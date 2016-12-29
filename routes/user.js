var express = require('express');
var router = express.Router();

var UserEntity = require('../models/user').UserEntity;

/* GET home page. */
router.post('/login', function(req, res, next) {
    console.log('You are in Login method!')
    console.log(req.body.username);

    UserEntity.findOne({username: req.body.username}, function(err, doc) {

        console.log('FindOne method');
        console.log(err);
        console.log(doc);

        // if (!err) {
            // console.log(user.username);
            // console.log(user.password);
            res.send(doc);
        // }
    });

    // res.send(UserEntity.find());

    

//   res.render('index');
});

module.exports = router;