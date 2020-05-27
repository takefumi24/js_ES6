"use strict";

{
  let i = 0;
  function showTime() {
    console.log(new Date());
    i++;
    if (i > 2) {
      clearInterval(intervalId);
    }
  }
  //1秒ごとに繰り返される
  const intervalId = setInterval(showTime,1000);
}
