var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '909005',
  database: 'currency'
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.query('show databases', function (err, rows, fields) {
  console.log(JSON.stringify(rows));
  console.log(rows[1].Database);
  console.log(fields);
});
