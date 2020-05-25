"use strict";

// xとrは定数とし、残りのものはオブジェクトとして扱えるようにして下さい。
{
  const otherProps = {
    r: 4,
    color: "red",
  };

  const point = {
    x: 100,
    y: 180,
    ...otherProps,
  };
  // 解答
  const { x, r, ...others } = point;
  console.log(x);
  console.log(r);
  console.log(others);
}
