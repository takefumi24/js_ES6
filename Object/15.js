/*
変数の代入について考える
*/

'use strict';

{
  let x = 1;
  let y = x;
  x = 5;
  //xとyの値をいじってコンソールに表示してその挙動を確認

  let x = [1, 2];
  let y = x;
  x[0] = 5;
  console.log(x); //出力結果を予想
  console.log(y); //出力結果を予想

}