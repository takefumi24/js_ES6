"use strict";

{
  // 年月日をコンソールに表示
  const d = new Date(1962, 6); // 1962-07-07
  // d.setDate(24); // 1962-07-24
  // console.log(d);
  d.setDate(33); // 1962-08-01
  d.setDate(22); // 1962-08-22
  d.setDate(0); // 1962-07-31
  d.setDate(98); // 1962-10-06
  d.setDate(-50); // 1962-08-11
  console.log(d);
}
