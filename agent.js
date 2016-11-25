"use strict";
import request from 'request';
import connection from './base';
import {formatData} from './formatData';

// connection.query('select * from CURRENCY')
//   .on('fields', function (fields) {
//     console.log(fields)
//   }).on('rows', function (rows) {
//     // console.log(rows);
//   }).on('result', function (result) {
//     // console.log(result);
//   }).on('error', function (error) {
//     console.error(error);
//   });
request.get({
  url: 'http://www.boc.cn/sourcedb/whpj/index.html',
  headers: {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36'
  }
}, function (error, res, body) {
  if (error) {
    console.error(error);
  } else {
    formatData(body);
  }
});
