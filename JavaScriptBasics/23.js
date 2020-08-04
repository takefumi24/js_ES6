/*
関数をまとめていこう
関数宣言と関数式（無名関数）について

ここでは関数宣言を関数式に書き換えます
*/

//厳密なエラーチェック

function sum(a, b, c) {//関数式に書き換える
  return a + b + c;
}

const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);