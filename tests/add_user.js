var bcrypt = require('bcrypt');
const saltRounds = 10;
var myPlaintextPassword = "asdqwe";
var User = require('../models/user');

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // Load hash from your password DB.
  bcrypt.compare(myPlaintextPassword, hash, function(err, res) {

    var user = new User({
      username : "admin",
      password : hash
    });

    user.save().then(function(err){
      console.log("XXXXXXXXXXXXXXXXXXXX" + err);
    });

  });


});
