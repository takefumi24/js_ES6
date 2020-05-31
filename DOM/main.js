'use strict'

{
  document.querySelector('button').addEventListener('dblclick', () => {
    console.log('ダブルクリックしたよ');
  });


  document.addEventListener('keydown', e => {
    console.log(e.key);
  } )
}
