var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // Load hash from your password DB.
  bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
      console.log(hash);
  });


});


bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log("SALT " + salt);
        console.log("HASH " + hash);
    });
});
