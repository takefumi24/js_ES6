"use strict";

//下記配列を番号をつけて順番に呼び出しなさい。
{
  const scores = [80, 60, 50, 70];

  scores.forEach((score,index)=> {
    console.log(`Score${index+1}:${score}`);
  })
}
