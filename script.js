function unfollow() {
  console.log("フォローを外しました");
};
function cancelTweet() {
  console.log("フォローを外しました");
};

//コールバック関数
function confirmed(fn) {
  if (window.confirm("実行しますか？")) {
    fn();
  }
}

confirmed(unfollow);
