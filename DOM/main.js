'use strict'

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target')
    //クラス属性の追加や削除
    if (targetNode.classList.contains('my-color') === true) {
      targetNode.classList.remove('my-color');
    } else {
      targetNode.classList.add('my-color');
    }
  });
}
