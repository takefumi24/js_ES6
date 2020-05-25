"use strict";

// 分割代入とレスト構文
{
  const scores = [80, 90, 40, 70];
// レスト構文
  const [a, b, ...others] = scores;
  console.log(a);
  console.log(b);
  console.log(others);
}
