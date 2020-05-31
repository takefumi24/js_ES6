'use strict'

{
  document.querySelector('button').addEventListener('dblclick', () => {
    console.log('ダブルクリックしたよ');
  });

  document.addEventListener('mousemove', () => {
    console.log('マウスが動く');
  })
}
