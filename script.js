"use strict";

//下記配列の中から偶数のみを呼び出しなさい。
{
  const numbers = [80, 133, 65, 99, 36, 187];
  const evenNumbers = numbers.filter(number=> number % 2 === 0);
  console.log(evenNumbers);
}
