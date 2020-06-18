"use strict";

{
  //高階関数arrayWalkを定義
  function arryWalk(data, f) {
    for (var key in data) {
      f(data[key], key);
    }
  }

  //結果値を格納するためのグローバル変数
  var result = 0;

  function sumElement(value, key) {
    result += value;
  }

  var ary = [1, 2, 4, 8, 16];
  arryWalk(ary, sumElement);
  console.log('合計値:' + result);
}
