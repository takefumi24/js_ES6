var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];

//16G ramが必要なソフト

//全てで動かせるフラグ
var allComputersCanRun = true;

//どれかでは動かせるフラグ
var someComputersCanRun = false;
//for文
for (let i = 0; i < computers.length; i++) {
  const computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRun = false;
  } else {
    someComputersCanRun = true;
  }
}

'_ _ _'
console.log(allComputersCanRun);
console.log(someComputersCanRun);

//every
computers.every(function () {
  return computer.ram >= 16;
});

var names = [
  'けん',
  'はなこ',
  'そいちろう',
];
names.every(function (name) {
  return name.length >= 3;
})

names.some(function (name) {
  return name.length >= 3;
})
