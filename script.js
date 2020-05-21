function confirmed(fn) {
  const input = window.prompt("実行しますか？");
  fn(input);
}

// 匿名関数が引数を持った関数になる
confirmed(function (input) {
  if (input === "実行") {
    console.log("リポジトリを削除");
  }
});
