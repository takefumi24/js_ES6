//Rest演算子
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log('"Debug": addNumbers(1, 2, 3, 4, 5)', addNumbers(1, 2, 3, 4, 5));

//Spread演算子
const defaultClors = ['赤', '緑'];
const userFavoriteColors = ['オレンジ', '黄色'];
const fallColors = ['茶', '紅葉'];
fls = ['青',...fallColors, '紫',...defaultClors, ...userFavoriteColors];
console.log('"Debug": fls', fls);

//Rest演算子とSpread演算子
function validateShoppingList(...items) {
  if (items.indexOf('牛乳') < 0) {
    return ['牛乳',...items];
  }

  return items;
}

validateShoppingList('オレンジ', 'パン','牛乳');

//実際のusecase
const MathLibrary = {
  calculateProduct(...rest) {
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
}
