function isTweetable(text) {
  return text.length <= 10;
}

//関数式,匿名関数
const isTweetable = function (text) {
  return text.length <= 10;
};

function alertTweetable(text) {
  if (islessThan(text)) {
    alert("you can tweet");
  }
}

alertTweetable("foo");
