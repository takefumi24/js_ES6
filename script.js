function islessThan(text) {
  return text.length <= 10;
}

function alertTweetable(text) {
  if (islessThan(text)) {
    alert("you can tweet");
  }
}

alertTweetable("foo");
