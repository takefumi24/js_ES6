/*
switch文を使ってみる

ここでは書き換えを練習します
*/

//厳密なエラーチェック

//色をsignalで変数宣言（色を変えて処理の確認をしてください）

//以下のif文をswitchに書き換えましょう

if (signal === 'red') {
  console.log('Stop!');
  } else if (signal === 'yellow') {
  console.log('Caution!');
  } else if (signal === 'blue'){
  console.log('Go!');
}

//signalの値がswitch文の条件と一致しなかった場合、コンソールにWrong signal!を表示