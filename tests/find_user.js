var User = require('../models/user');

User.find({ username : "admin"}, 'username password', function(err, users){
  console.log(users);
  users[0].isPasswordValid("asdqwe").then(function(res){
    console.log(res);
  })
})
