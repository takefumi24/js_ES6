"use strict";

{
  const scores = [10, 3, 9];
  //数値の合計と平均を求める
  let sum = 0;
  scores.forEach(score => {
    sum += score;
  });

  const avg = sum / scores.length;

  console.log(sum);
  console.log(avg);

  // 小数点以下を切り捨てる
  console.log(Math.floor(avg));

  // 小数点以下を切り上げる
  console.log(Math.ceil(avg));

  //四捨五入
  console.log(Math.round(avg));
  // 小数点第３位まで
  console.log(avg.toFixed(3));

  // 0以上１未満のランダム数値
  console.log(Math.random());

}
