var db = require('../db');
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function(callback) {
      //get username, text,
      var queryString = "SELECT messages.id, user.username, messages.text, messages.roomname, messages.createdAt \
                         FROM messages LEFT OUTER JOIN user ON (messages.userid = user.id) \
                         ORDER BY messages.id DESC";
      db.query(queryString, function(err, results) {
        console.log("get err ", err);
        callback(err, results);
      });
    },


    post: function (params, callback) {  // a function which can be used to insert a message into the database
      var queryString = "INSERT INTO user (username) values (?)";
      var queryString2 = "INSERT INTO messages (userid, text, roomname) \
                          values ((SELECT id FROM user WHERE username = ? LIMIT 1), ?, ?)";
      var queryString3 = "INSERT INTO roomname (roomname) values (?)";


      var databaseQuery = function(query, params, callback) {
        return new Promise(function(resolve, reject) {
          db.query(query, params, function(err, results) {
          });
        });
      };

      databaseQuery(queryString, params).
        then(databaseQuery(queryString2, params, function(err, results) {
          callback(err, results);
        })).
         then(databaseQuery(queryString3, params[2])).
        catch(function(err) {
          console.log('error in creating user and message');
        });

    }
  },
  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = "SELECT * FROM users";
      db.query(queryString, function(err, results) {
        callback(results);
      });
    },
    post: function (params, callback) {
      var queryString = "INSERT INTO users (username) values (?)";
      db.query(queryString, params, function(err, results) {
        callback(results);
      });
    }

  }
};

