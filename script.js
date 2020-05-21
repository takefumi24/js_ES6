//コールバック関数に匿名関数
function confirmed(fn) {
  if (window.confirm("実行しますか？")) {
    fn();
  }
}

confirmed(function() {
  console.log("フォローを外しました");
});
