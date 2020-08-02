/*
returnを使ってみる

ここではsumの合計値を出すコードに書き換えていきます

returnの特徴に関してドットインストール内で説明がありますが、
この特徴に関してはミニアプリでその力を発揮します。
*/

//厳密なエラーチェック

//以下のコードだとsumの合計が出せないので、totalという変数でその合計値をコンソールに表示

function sum(a, b, c) {
  console.log(a + b + c);
}

  sum(1, 2, 3);
  sum(3, 4, 5);