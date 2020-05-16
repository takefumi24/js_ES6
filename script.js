// ((((()))))の均衡が取れていることを証明するコードを記載してみる
function balancedParens(string) {
  return !string.split('').reduce(function (previous, char) {
    if (previous < 0) { return previous; }
    if (char === '(') { return previous + 1; }
    if (char === ')') { return previous - 1; }
  }, 0);
};

console.log(balancedParens('()'));
