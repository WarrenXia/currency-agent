"use strict";
import cheerio from 'cheerio';
import connection from './base';
import currencyConfig from './currencyConfig.json';
const formatData = (data) => {
  let $ = cheerio.load(data, {
    decodeEntities: false
  });
  let dataTr = $('table').eq(1).find('tr');
  for (let i = 1; i < dataTr.length; i++) {
    let currencyLi = {};
    let dataTrLi = dataTr.eq(i).find('td');
    let name = dataTrLi.eq(0).text();
    if (!!currencyConfig[name]) {
      currencyLi.id = currencyConfig[name]['code'];
      currencyLi.name = name;
      currencyLi.area = currencyConfig[name]['area'];
      currencyLi.symbol = currencyConfig[name]['symbol'];
      currencyLi.spotin = dataTrLi.eq(1).text();
      currencyLi.cashin = dataTrLi.eq(2).text();
      currencyLi.spotout = dataTrLi.eq(3).text();
      currencyLi.cashout = dataTrLi.eq(4).text();
      currencyLi.middleprice = dataTrLi.eq(5).text();
      let date = dataTrLi.eq(6).text();
      let time = dataTrLi.eq(7).text();
      currencyLi.date = date;
      currencyLi.time = time;
      currencyLi.timestamp = Date.parse(`${date} ${time}`);
      let sqlSearch = `INSERT INTO CURRENCY(id,name,area,symbol,timestamp,date,time,spotin,cashin,spotout,cashout,middleprice) SELECT ${currencyLi.id},'${currencyLi.name}','${currencyLi.area}','${currencyLi.symbol}',${currencyLi.timestamp},'${currencyLi.date}','${currencyLi.time}','${currencyLi.spotin}','${currencyLi.cashin}','${currencyLi.spotout}','${currencyLi.cashout}','${currencyLi.middleprice}' FROM DUAL WHERE NOT EXISTS(SELECT * FROM CURRENCY WHERE id = ${currencyLi.id} and timestamp=${currencyLi.timestamp})`;
      connection.query(sqlSearch, function (err, rows, fields) {
        if (err) {
          console.log(err);
        } else {
          console.log('Stored data successfully');
        }
      });
    }
  }
};
export {
  formatData
};
