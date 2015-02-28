//DELETE THIS FILE

// app.post('/users',function(req,res){
//     var user = {'userid':req.body.userid,
//                 'name':req.body.name,
//                 'address':req.body.address};
//     var query = connection.query('insert into users set ?',user,function(err,result){
//         if (err) {
//             console.error(err);
//             throw err;
//         }
//         console.log(query);
//         res.send(200,'success');
//     });
// });

var mysql = require('mysql');

var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : 'Tufu2009',
      database : 'chat',
    }
);
console.log(connection);

connection.connect();

var queryString = 'SELECT * FROM messages';

connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
    console.log('Post Titles: '+rows );
});
connection.end();

/* return   get value:       rows[i].key2
rows
[
    {key1:value1, key2:value2, ..., key3:value3},       //row1
    {key1:value11, key2:value21, ..., key3:value31},    //row2
    {key1:value12, key2:value22, ..., key3:value32}     //row3
]
*/

//connection.query(...).sql   => what's sent to mysql.
// res.json(rows)  => json format
