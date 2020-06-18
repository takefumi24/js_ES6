//ES5
var expense = {
  type: '交際費',
  amount: '4500JPY',
};

var type = expense.type;
var amount = expense.amount;

//ES6
const { type, amount } = expense;


//オブジェクトに対しての分割代入
var savedFile = {
  extension: 'jpg',
  name: 'profile',
  size:14040
}

function fileSummary({name,extension,size},{username}) {
  return `${username}:${name}.${extension}の容量は${size}です。`
}

fileSummary(savedFile,{username:'ken'});
console.log('"Debug": fileSummary(savedFile);', fileSummary(savedFile,{username:'ken'}));

//配列に対しての分割代入
const companies = [
  'Google',
  'Facebook',
  'Uber',
];

const [name,...rest] = companies;

//オブジェクトと配列を組み合わせた分割代入
const companies = [
  { name: 'Google', location: 'マウンテンビュー' },
  { name: 'Facebook', location: 'メロンパーク' },
  { name: 'Uber', location: 'サンフランシスコ' },
];

const [{ locations }] = companies;
console.log('"Debug": locations', locations);

const Google = {
  locations: ['マウンテンビュー', 'ニューヨーク', 'ロンドン']
};

const { locations:locs } = Google;
console.log('"Debug": first', first);

function signup({ password, email, birthday, city ,username }) {
  //ここでユーザーを作成してDBに保存する
}

const user = {
  username: "myusername",
  password: "mypassword",
  email: "myemail@example.com",
  birthday: "1990/1/1",
  city: "東京",
};
signup(user);
console.log('"Debug": signup(user)', signup(user));

//分割代入応用
const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];

points.map(([x, y]) => {
  console.log('"Debug": { x: x, y: y }', { x: x, y: y });
  return { x, y }
});
