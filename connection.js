"use strict";
import mysql from 'mysql';
import dataResult from './agent';
const mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: 'currency'
};
const connection = mysql.createConnection(mysqlConfig);
export default connection;
