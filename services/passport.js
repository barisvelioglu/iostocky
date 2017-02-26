var passport = require("passport");
var Strategy = require('passport-local').Strategy;
var User = require('../models/user');

passport.use(new Strategy(
  function(username, password, cb) {
    User.findOne({ username : username }, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      console.log(user);
	    user.isPasswordValid(password).then(function(){
				return cb(null, user);
			}).catch(function(err){
				return cb(err, false);
			});
    });
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
  });
});

module.exports = passport;
