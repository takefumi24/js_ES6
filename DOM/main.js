'use strict'

{
  document.querySelector('button').addEventListener('click', () => {
    const colors = document.querySelectorAll('input');
    const selectedColors = [];
    let i;

    colors.forEach(color => {
      if (color.checked === true) {
        selectedColors.push(color.value);
      }
    });

    for (i = 0; i < selectedColors.length; i++) {
      let li = document.createElement("li");
      li.textContent = selectedColors[i];
      document.querySelector("ul").appendChild(li);
    }
  });
}
