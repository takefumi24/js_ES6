const numbers = [10, 20, 30];
const sum = 0;

const addNumber = numbers.reduce(function (sum,number) {
  return sum + number;
},10)
console.log(addNumber);
