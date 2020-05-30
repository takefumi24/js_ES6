'use strict'

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target')
    //toggleメソッドを使い、クラス属性の追加や削除
    targetNode.classList.toggle('my-color');
  });
}
