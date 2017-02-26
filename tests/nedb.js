var Datastore = require('nedb');

var db_token = new Datastore({
  filename: '../databases/token.db', // provide a path to the database file
  autoload: true, // automatically load the database
});

module.exports = {
  db_token : db_token
};
