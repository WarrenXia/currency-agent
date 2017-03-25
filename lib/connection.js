"use strict";
import mysql from 'mysql';
const mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Tian0@neo'
};
const connection = mysql.createConnection(mysqlConfig);
connection.connect();
// 使用promise封装
const queryData = (query) => {
  return new Promise(function(resolve, reject) {
    connection.query(query, function(error, results, fileds) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};
export {connection, queryData};
