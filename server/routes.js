var controllers = require('./controllers');  // ./controller/index.js
var router = require('express').Router();

  // router.route("url request").get(function(response, request){}).post(func(response, request){})
  //GET request on /messages
for (var route in controllers) {
  router.route("/" + route)  //messgages     router.route('/messages').get().post()
    .get(controllers[route].get)
    .post(controllers[route].post);
  console.log("got to routes");
}


module.exports = router;

