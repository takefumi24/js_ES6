"use strict";

{
  const d = [2019, 11, 14];
  //繋げる
  console.log(d.join('/'));
  //時間、分、秒を文字列の配列に
  const t = "17:08:24";
  console.log(t.split(":"));
  //分割代入を使って配列に
  const [hour, minute, second] = t.split(':');
  console.log(hour);
  console.log(minute);
  console.log(second);
}
