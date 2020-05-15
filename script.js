const computers = [
  {name:"Apple", ram:24},
  {name:"Compaq", ram:4},
  {name:"Acer", ram:32}
];

// 16GB ramが必要なソフト
// 全て動かせるフラグ
// どれかでは動かせるフラグ
computers.every(function (computer) {
  return computer.ram >= 16
});

computers.some(function (computer) {
  return computer.ram >= 16
});
