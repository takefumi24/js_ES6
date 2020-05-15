const primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

// ['red','yellow', 'blue']の配列を作る(mapメソッド以外)
reduceMe = primaryColors.reduce(function (previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous
},[]);
console.log(reduceMe);
