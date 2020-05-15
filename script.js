// for (const i = 0;)ではエラーになる→constで変数定義をしているから
const colors = ['red', 'blue', 'green'];
for (var i = 0; i < colors.length; i++){
  console.log(colors[i]);
}
