"use strict";

{
  // 月日を表示
  // const d = new Date;
  // console.log(`${d.getMonth() + 1}月 ${d.getDate()}日`);

  const da = new Date(2020,4);
  da.setHours(10, 20, 30);
  da.setDate(31);
  console.log(da);
}
