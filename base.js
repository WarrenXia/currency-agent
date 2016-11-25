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
connection.query('create table if not exists CURRENCY (id int,name varchar(255),area varchar(255),timestamp bigint(13),date date,time time,spotin varchar(255),cashin varchar(255),spotout varchar(255),cashout varchar(255),middleprice varchar(255) )')
  .on('fields', function (fields) {
    // console.log(fields);
  }).on('rows', function (rows) {
    // console.log(rows);
  }).on('result', function (result) {
    // console.log(result);
  }).on('error', function (error) {
    // console.error(error);
  });

 export default connection;
