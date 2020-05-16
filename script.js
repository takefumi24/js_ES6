const points = [
  [4,5],
  [10,3],
  [40,0]
];


const re = points.map(([x, y]) => {
  return { x, y };
});

console.log(re);



// 最終的にオブジェクトとして管理したい
// [
//   {x:4,y:5},
//   {x:10,y:3},
//   {x:40,y:0},
// ]
