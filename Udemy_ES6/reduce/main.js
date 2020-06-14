// var numbers = [10, 20, 30];
// var sum = 0;

// //for文
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// //reduce文
// numbers.reduce(function (sum,number) {
//   return sum + number
// }, 0);

// //mapメソッドを使わずに新しい配列を作る
// var primaryColors = [
//   {color: 'red'},
//   {color: 'yellow'},
//   {color: 'blue'}
// ];

// primaryColors.reduce(function (previous, primaryColor) {
//   previous.push(primaryColor.color)
//   return previous;
// }, []);

// '(((())))'

function balancedParens(string) {
  return !string.split('').reduce(function (previous, char) {
    if (previous < 0) { return previous;}
    if (char === '(') { return previous + 1; }
    if (char === ')') { return previous - 1;}
  },0)
}

console.log(balancedParens(')('));
