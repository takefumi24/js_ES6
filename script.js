"use strict";

{
  const button = document.getElementById("addBtn");
  const lists = document.getElementById("lists");
  button.addEventListener('click', async () => {
    //データのやりとり
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    //DOM操作
    users.forEach((user) => {
      // li要素を追加
      const list = document.createElement('li');
      list.innerText = user.name;
      lists.appendChild(list);
    });
  });

  window.addEventListener("load", async () => {
    //データのやりとり
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    //DOM操作
    users.forEach((user) => {
      // li要素を追加
      const list = document.createElement("li");
      list.innerText = user.name;
      lists.appendChild(list);
    });
  });

}
