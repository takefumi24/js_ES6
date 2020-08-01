/*
引数を使ってみる

ここでは引数を使ってコンソールに表示される内容を変更する練習をします
*/

//厳密なエラーチェック

//以下のコードをいコメントを参考にコードを書き加えましょう

function showAd() { //仮引数を設ける
  console.log('----------');
  console.log('----------');//ここで受け取った引数を表示する
  console.log('----------');
}

showAd();//Header Adを実引数に
console.log('Tom is great!');
console.log('Bob is great!');
showAd();//Adを実引数に設けずにコンソールに表示する
console.log('Steve is great!');
console.log('Richard is great!');
showAd();//Footer Adを実引数に