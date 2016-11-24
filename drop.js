"use strict";
import mysql from 'mysql';
let mysqlConfig={
  host: 'localhost',
  user: 'root',
  password: '909005'
};
const initDatabase = mysql.createConnection(mysqlConfig);
initDatabase.connect();
// 创建数据库
initDatabase.query('drop database CURRENCY',function(err, rows, fields){
  console.log(err);
  console.log(JSON.stringify(rows));
  console.log(rows);
  console.log(fields);
});
initDatabase.query('show databases',function(err, rows, fields){
  console.log(err);
  console.log(JSON.stringify(rows));
  console.log(rows);
  console.log(fields);
});
