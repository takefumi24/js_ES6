'use strict';

{
  const point = {
    x: 100,
    y: 180,

  };
  const keys = Object.keys(point);
  keys.forEach(key => {
    console.log(`Key:${key} Value:${point[key]}`);//文字列として扱っているので、point.keyではなく、point[key]となる
  });


}
