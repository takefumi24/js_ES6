"use strict";

{
  const button = document.getElementById("addBtn");
  const lists = document.getElementById("lists");

  async function getUsers() {
    //データのやりとり
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
  }

  function addList(user) {
    // li要素を追加
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
  }

  async function listUsers() {
    const users = await getUsers();
    users.forEach(addList);
  }

  button.addEventListener("click", listUsers);

  window.addEventListener("load", listUsers);
}
