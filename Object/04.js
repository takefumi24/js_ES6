/*
配列の先頭の要素と末尾の要素をいじってみる
*/

'use strict';

{
  const scores = [80, 90, 40, 70];
  //scoresの要素が90, 40, 70, 60, 50になるように実装

  for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);
  }
}