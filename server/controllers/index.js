var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  // On request for /messages run below codes.
  messages: {
    get: function (req, res) {   // a function which handles a get request for all messages
      console.log("got a GET request");
      models.messages.get(function(err, results) {
        console.log("controller error", err);
        console.log('controller results', results);
        res.json({"results": results});
      });
      //res.writeHead(200, headers);
      //res.end();
    },
    post: function (req, res) {  // a function which handles posting a message to the database
      console.log(req.body);
      var params = [ req.body['username'], req.body['text'], req.body['roomname'] ];
      console.log("params are ", params);
      models.messages.post(params, function(err, results) {

      });

    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log("got a GET request");
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

  // url request by client.
  // If client request http:local:3030/roomFilter
  // $.ajax(/roomFilter, {})
  // http:localhost:3030/messages?roomname=lobby
  //roomFilter: {
  //  post: function (req, res) {
  //    req.data
  //  }
  //}

};


// client user is gonna choose from drop down for room name
// then post request to  /roomFilter, server looks data which contains roomname
// whith that data we construct sql and get all the messages in the roomname
// response will be to send the html that contains all the messages.
// that will replace the chat box.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//CODE FOR ORM
/*
var models = require('../models');
var bluebird = require('bluebird');

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
      var params = {
        text: req.body[text],
        username: req.body[username],
        roomname: req.body[roomname]
      }
      models.messages.post(params, function(err, results) {

      });

    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log("got a GET request");
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
*/
