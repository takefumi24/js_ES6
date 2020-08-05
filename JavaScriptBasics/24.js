/*
アロー関数を確認してみる

ここでは関数式にアロー関数に書き換えます
さらにアロー関数の便利な書き方を覚えます
*/

//厳密なエラーチェック

const sum = function(a, b, c) {//この関数式をアロー関数に書き換える
  return a + b + c;//処理の中身がreturnのときアロー関数で簡略化できるのでそれに書き換える
};

const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);

//以下の指示に従いまずは関数式を書いてみる
//doubleという関数式を準備、引数はa

//return a * 2;//戻り値（返り値）はaの2倍の値

//コンソールで処理結果を表示（実引数は12）

//上記の関数をreturnを省略して書き直す
//上記の関数は引数が1つなのでさらに省略できる。省略形で書き直す。