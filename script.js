// Q. どうやって変数を宣言するのか？
// A.const 変数名 = 初期値;
// let 変数名 = 初期値;
// var 変数名 = 初期値;

// constの特徴を記載して下さい
// 再代入、再定義できない。
//定数ではない

const obj = {
  foo: 123
};
console.log(obj.foo);
obj.foo = 456;
console.log(obj.foo);

const fooWidth = 100;//camelCase→主にキャメルケースが使われる
const foo_width = 100;//snake_Case


// letの特徴を記載して下さい
// 再代入はできるが、再定義できない。

let letNumber = 100;
letNumber = 200;

console.log("OK");
console.log(letNumber);


//varの特徴を記載してください
//再代入も再定義もできる。

var varNumber = 300;
var varNumber = 200;

console.log("OK");
console.log(varNumber);

//constが一番厳密なのでconstを使うべし

//varを使ってはいけない理由
// →ブロックスコープ無視、変数の巻き上げといったバグの温床になる性質がある
