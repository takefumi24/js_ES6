'use strict'

{
  function update() {
    // document.querySelector('h1').textContent = 'Changed!';
    // document.getElementById('target').textContent = 'Changed';
    // document.querySelectorAll('p')[1].textContent = 'Changed';
    document.querySelectorAll('p').forEach((p, index) => {
      p.textContent = `${index}番目のpです`;
    });
  }
  setTimeout(update,1000);
}
