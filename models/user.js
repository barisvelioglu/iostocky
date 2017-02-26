var db = require('../db');
var bcrypt = require('bcrypt');
var Promise = require("bluebird");

var userSchema = new db.Schema({
    username: String,
    password : String
});

userSchema.methods.isPasswordValid = function (plainPassword) {
  var that = this;
  return new Promise(function(resolve, reject){
    bcrypt.compare(plainPassword, that.password, function(err, res) {
      if(err){
        reject(err);
      }else {
        resolve(res);
      }
    });
  });
};

var User = db.model('User', userSchema);

module.exports = User;
