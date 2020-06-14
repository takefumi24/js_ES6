// //アロー関数基礎
const add = (a, b) =>  a + b;
add(1, 2);

// //引数が2個ある場合
const double = (number1, number2) => {
  return 2 * number1 + 2 * number2;
}
double(8,4)
console.log('"Debug": double(8,4)', double(8,4));

// //アロー関数の省略
const numbers = [1, 2, 3];
func = numbers.map(number =>  2 * number);
console.log('"Debug": func', func);

//アロー関数の使い所
// コールバック関数は別世界なので、thisが使えない。その時は、.bind(this)やvar self = this;を定義する
const team = {
  members: ['太郎', '花子'],
  teamName: 'スーパーチーム',
  teamSummary: function () {
    var self = this;
    return this.members.map(function (member) {
      return `${member}は${self.teamName}の所属です。`
    }.bind(this));
  }
};
console.log(team.teamSummary());

//アロー関数の使い所(続き)
//アロー関数でやると、どうなるか？
const team = {
  members: ['太郎', '花子'],
  teamName: 'スーパーチーム',
  teamSummary: function () {
    return this.members.map( (member) => {
      return `${member}は${this.teamName}の所属です。`
    });
  }
};
console.log(team.teamSummary());
