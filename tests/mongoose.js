var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/iostock_test');

var db = mongoose.connection;

var userSchema = mongoose.Schema({
    name: String,
    password : String
});

var User = mongoose.model('User', userSchema);


var user1 = new User({ name: 'admin', password : '123456' });

user1.save(function(err, user){
  if (err) console.log(err);
  else console.log('Saved ', user );
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected!!!");
});
