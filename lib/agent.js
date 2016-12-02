"use strict";
import request from 'request';
import formatData from './formatData';
// 抓取数据
const getData = () => {
  for (let i = 0; i < 10; i++) {
    let url;
    if (i === 0) {
      url = 'http://www.boc.cn/sourcedb/whpj/index.html';
    } else {
      url = `http://www.boc.cn/sourcedb/whpj/index_${i}.html`;
    }
    request.get({
      url: url,
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
  }
};
export default function agent() {
  // 每隔三十分钟抓取一次数据
  setInterval(function () {
    getData();
  }, 1000 * 60 * 30);
}
