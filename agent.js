"use strict";
import mysql from 'mysql';
let mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: '909005'
};
const initDatabase = mysql.createConnection(mysqlConfig);

initDatabase.connect();
// 创建数据库
initDatabase.query('create database if not exists CURRENCY');
initDatabase.end();

mysqlConfig['database'] = 'CURRENCY';

const connection = mysql.createConnection(mysqlConfig);
connection.connect();
// 创建数据表
connection.query('create table if not exists CURRENCY (id int,name varchar(255),country varchar(255),timestamp timestamp,date date,time time,spotin varchar(255),cashin varchar(255),spotout varchar(255),cashout varchar(255),middleprice varchar(255) )', function (err, rows, fields) {
  // console.log(err);
  // console.log(rows);
  // console.log(fields);
});

connection.query('select * from CURRENCY', (err, rows, fields) => {
  // console.log(err);
  // console.log(rows);
  console.log(fields);
});
