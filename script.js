"use strict";

const signal = "blue";

// if (signal === 'red') {
//   console.log('Stop!');
// } else if (signal === 'yellow') {
//   console.log('Caution!');
// } else if (signal === 'blue'){
//   console.log('Go!');
// }

//上記if文をswitch文に書き換えなさい。

switch (signal) {
  case "red":
    console.log("Stop!");
    break;
  case "yellow":
    console.log("Caution!");
    break;
  case "blue":
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Wrong signal!");
    break;
}
