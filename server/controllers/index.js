var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  // On request for /messages run below codes.
  messages: {
    get: function (req, res) {   // a function which handles a get request for all messages
      console.log("got a GET request");
      models.messages.get(function(err, results) {
        console.log("controller error", err);
        res.json({"results": results});
      });
      //res.writeHead(200, headers);
      //res.end();
    },
    post: function (req, res) {  // a function which handles posting a message to the database
      var params = [ req.body['username'], req.body['text'], req.body['roomname'] ];
      models.messages.post(params, function(err, results) {
        res.json(results);
      });

    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        //TODO handle errors
        res.json(results);
      });
    },
    post: function (req, res) {
      var param = [ req.body[username] ];
      models.users.post(params, function(err, results) {
        res.json(results);
      });
    }
  }
};



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//CODE FOR ORM
/*
var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');

var Message = db.Message;
var User = db.User;
//var Message = require('../sequelizeIt')

var userFields = ['username'];
var messageFields = ['message', 'username', 'roomname'];

module.exports = {
  // On request for /messages run below codes.
  messages: {
    get: function (req, res) {   // a function which handles a get request for all messages
      Message.findAll({ include: [User] })  //by definition is an outer join
        .complete(function(err, results) {
          res.json(results);
        });
    },
    post: function (req, res) {  // a function which handles posting a message to the database
      console.log(req.body);
      User.findOrCreate({username: req.body[username]})
        .complete(function(err, user){
          var params = {
            text: req.body[text],
            userid: user.id,
            roomname: req.body[roomname]
          }
          Message.create(params)
            .complete(function(err, results) {
              res.sendStatus(201);
            });
        });
      }
  },

  users: {
    // Ditto as above
    get: function (req, res) {   // a function which handles a get request for all messages
      User.findAll()  //by definition is an outer join
        .complete(function(err, results) {
          res.json(results);
        });
    },
    post: function (req, res) {  // a function which handles posting a message to the database
      console.log(req.body);
      User.create({username: req.body[username]})
        .complete(function(err, user) {
          res.sendStatus(201);
        });
    }
  }
}
*/
