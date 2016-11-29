"use strict";
import dataResult from './agent';
import connection from './connection';

connection.connect();
const createDatabase = () => {
  return new Promise(function (resolve, reject) {
    connection.query('create database if not exists CURRENCY', function (error, results, fileds) {
      if(error){
        reject(error);
      }else{
        resolve();
      }
    });
  });
};
const createTable = () => {
  return new Promise(function (resolve, reject) {
    connection.query('create table if not exists CURRENCY.CURRENCY (id int,name varchar(255),area varchar(255),symbol varchar(255),timestamp bigint(13),date date,time time,spotin varchar(255),cashin varchar(255),spotout varchar(255),cashout varchar(255),middleprice varchar(255) )', function (error, results, fileds) {
      if(error){
        reject(error);
      }else{
        resolve();
      }
    });
  });
};
async function app() {
  try {
    await createDatabase();
    await createTable();
    dataResult();
  } catch (e) {
    console.error(e);
  }
};
app();
