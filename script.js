// アロー関数を使ってリファクタリングしてみる
const numbers = [1, 2, 3];

numbers.map(function (number) {
  return 2 * number;
});

numbers.map(number => 2 * number);
