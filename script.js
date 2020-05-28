"use strict";

{
  const button = document.getElementById("addBtn");
  const lists = document.getElementById("lists");
  button.addEventListener('click', async () => {
    //データのやりとり
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    //DOM操作

    const list = document.createElement('li');
    list.innerText = 'foo';
    lists.appendChild(list);
  });

}
