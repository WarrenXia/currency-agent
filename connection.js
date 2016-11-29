"use strict";
import mysql from 'mysql';
const mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: 'currency'
};
const connection = mysql.createConnection(mysqlConfig);
connection.connect();
// 使用promise封装
const createQuery = (query) => {
  return new Promise(function (resolve, reject) {
    connection.query(query, function (error, results, fileds) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};
export {
  connection,
  createQuery
};
