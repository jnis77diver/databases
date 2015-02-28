var models = require('../models');
var bluebird = require('bluebird');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "application/jsonp"
};

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("got a GET request");
      res.writeHead(200, headers);
      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  },

  sendResponse: function (req, res, urlPath){
    var filePath = "/client/" + req.url;
    console.log(filePath);
    if (filePath == './web/public/') {
      filePath = './web/public/' + indexString;
    }
    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
      case '.js':
        contentType = 'text/javascript';
        break;
      case '.css':
        contentType = 'text/css';
        break;
    }
    //Test whether or not the given path exists by checking with the file system
    fs.exists(filePath, function(exists) {
      if (exists) {
        fs.readFile(filePath, function(error, content) {
          if (error) {
            res.writeHead(500);
            res.end();
          }
          else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
          }
        });
      }
      else {
        res.writeHead(404);
        res.end();
      }
    });
  }
};

