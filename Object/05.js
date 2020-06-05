/*
配列の要素の途中の要素をいじってみる
*/

'use strict';

{
  const scores = [80, 90, 40, 70];
  //配列の要素90を40と50に分ける

  for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);
  }
}