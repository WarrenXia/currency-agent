"use strict";
import cheerio from 'cheerio';
import currencyConfig from './currencyConfig.json';
const formatData = (data) => {
  // console.log(data);
  let $ = cheerio.load(data, {
    decodeEntities: false
  });
  let currencyUl = [];
  let dataTr = $('table').eq(1).find('tr');
  for (let i = 1; i < dataTr.length; i++) {
    let currencyLi = {};
    let dataTrLi = dataTr.eq(i).find('td');
    let name = dataTrLi.eq(0).text();
    if(!!currencyConfig[name]){
      currencyLi.id = currencyConfig[name][1];
      currencyLi.name = name;
      currencyLi.area = currencyConfig[name][0];
      currencyLi.spotin = dataTrLi.eq(1).text();
      currencyLi.cashin = dataTrLi.eq(2).text();
      currencyLi.spotout = dataTrLi.eq(3).text();
      currencyLi.cashout = dataTrLi.eq(4).text();
      currencyLi.middleprice = dataTrLi.eq(5).text();
      currencyLi.date = dataTrLi.eq(6).text();
      currencyLi.time = dataTrLi.eq(7).text();
      currencyLi.timestamp = Date.parse(currencyLi.date + ' ' + currencyLi.time);
      currencyUl.push(currencyLi);
    }
  }
  console.log(currencyUl);
  // dataTr.map((item,index) => {
  //   console.log(item);
  // });

};
export {
  formatData
};
