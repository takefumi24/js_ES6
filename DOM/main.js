'use strict'

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target')
    //classは予約語であるため、クラス属性については例外的に使えない
    targetNode.className = 'my-color my-border'
  })
}
