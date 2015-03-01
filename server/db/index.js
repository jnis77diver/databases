var mysql = require('mysql');
/*var orm = new Sequelize('chat', 'root', 'Tofu2009');
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var User = orm.define('User', {
  username: Sequelize.STRING
});

var Message = orm.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
})

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;*/

var connection = mysql.createConnection(
     {
       host     : '127.0.0.1',
       port     : 3306,
       user     : 'root',
       password : 'Tofu2009',
       database : 'chat'
     }
);

connection.connect();

module.exports = connection;

