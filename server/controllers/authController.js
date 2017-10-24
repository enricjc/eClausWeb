var passport = require('passport');
var passportJwt = require('passport-jwt');
var User = require('../models/userModel');
var conf = require('../config/jwt');
var Strategy = passportJwt.Strategy;
var Extract = passportJwt.ExtractJwt;
var jwt = require("jwt-simple");
var mongoose = require('mongoose');
var params = {
    secretOrKey: conf.jwtSecret,
    jwtFromRequest: Extract.fromAuthHeaderWithScheme('jwt'),
};

var strategy = new Strategy(params, function(payload, done) {

    User.findOne({ _id: payload.id }, function(err, user) {
        if (err) {
            return done(new Error("no user found"), null);
        } else {
            return done(null, {
                id: user._id,
                email: user.email
            });

        }
    });

});
passport.use(strategy);

exports.initialize = function() {
    return passport.initialize();
};

exports.authenticate = function() {
    return passport.authenticate("jwt", conf.jwtSession);
};
exports.login = function(req, res) {

    User.findOne({ 'email': req.body.email }, function(err, user) {
        if (user) {
            user.comparePassword(req.body.password, function(err, match) {
                if (match) {
                    //yay is match so we will create a token
                    var payload = { id: user.id };
                    var token = jwt.encode(payload, conf.jwtSecret);
                    res.json({ token: token });
                } else {
                    res.status(500);
                }
            });
        } else {
            res.status(200);
            res.json({ error: 'Bad Credentials..' });
        }
    });
};
