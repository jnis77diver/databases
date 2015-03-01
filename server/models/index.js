var db = require('../db');


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
      var queryString = "INSERT INTO messages (userid, text, roomname) \
                         values ((SELECT id FROM user WHERE username = ? LIMIT 1), ?, ?)";
      db.query(queryString, params, function(err, results) {
        console.log("err ", err);
        console.log("results from DBquery ", results);
        callback(err, results);
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

