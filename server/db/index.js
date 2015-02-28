var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".




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

// console.log(connection);

//connection.connect();

//var queryString = 'INSERT INTO user (username) values ("Ko")';
//
//connection.query(queryString, function(err, rows, fields) {
//  if (err)  {
//     console.log(err.code);  // ER_DUP_ENTRY
//  }
//  console.log('Post Titles: '+ JSON.stringify(fields) );
//});
//connection.end();

//module.exports = db;
