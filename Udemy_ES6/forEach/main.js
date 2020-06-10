//数字の配列を用意する
var numbers = [1, 2, 3, 4, 5];
//合計を保持する変数を用意する
sum = 0;
//配列の一つ一つの数字を合計に足す
numbers.forEach(function (number) {
  sum += number;
})
//合計を表示する
sum;

//forEachは、実務ではメールを削除させる機能に使われることがある
//可読性が高い
