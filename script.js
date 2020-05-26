"use strict";

{
  const point = {
    x: 100,
    y:180,
  }

  //Object.keys();
  const keys = Object.keys(point);
  keys.forEach(key => {
    console.log(`Key:${key} Value: ${point[key]}`);
  });

  //配列とオブジェクトの組み合わせ
  const points = [
    { x:30,y:20},
    { x:30,y:50},
    { x:30,y:90},
  ]

  points[1].y
}
