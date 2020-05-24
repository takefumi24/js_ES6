'use strict';

{
  const scores = [80, 90, 40, 70];
  //値を別々の定数にしたい
  // const [a, b, c, d] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);

  const [a, b, ...others] = scores;
    console.log(a);
    console.log(b);
    console.log(others);

}
