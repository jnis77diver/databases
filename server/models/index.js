var db = require('../db');


module.exports = {
  messages: {
    get: function () {  // a function which produces all the messages
      get: function (callback) {
        //get username, text,
        var queryString = "SELECT messages.id, messages.text, messages.roomname FROM messages \
                           LEFT OUTER JOIN users ON (messages.userid = users.ud) \
                           ORDER BY messages.id DESC";
        db.query(queryString, function(err, results) {
          callback(results);
        });
    },
    post: function () {   // a function which can be used to insert a message into the database
      post: function (params callback) {
        var queryString = "INSERT INTO messages (text, userid, roomname) \
                           values (?, SELECT id FROM users WHERE username = ? LIMIT 1, ?)";
        db.query(queryString, params function(err, results) {
          callback(results);
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
    post: function (params callback) {
      var queryString = "INSERT INTO users (username) values (?)";
      db.query(queryString, params function(err, results) {
        callback(results);
      });
    }
  }
};

