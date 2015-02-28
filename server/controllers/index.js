var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  // On request for /messages run below codes.
  messages: {
    get: function (req, res) {   // a function which handles a get request for all messages
      console.log("got a GET request");
      //res.writeHead(200, headers);
      //res.end();
    },
    post: function (req, res) {  // a function which handles posting a message to the database
      console.log(req.body);
      models.messages.post();

    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log("got a GET request");
    },
    post: function (req, res) {}
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

