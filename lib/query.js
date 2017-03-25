"use strict";
import {queryData} from './connection';

let sqlQuery = 'select * from CURRENCY.CURRENCY where id=303 and id=303 order by timestamp desc limit 3';
async function query() {
  let results = await queryData(sqlQuery);
  console.log(results);
}
query();
// connection.query(sqlQuery, function (err, results, fileds) {
//   console.error(err);
//   console.log(results);
//   console.log(fileds);
// });
