"use strict";

{
  const button = document.getElementById("addBtn");
  const lists = document.getElementById("lists");

  function addList(user) {
    // li要素を追加
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
  }


  async function getUsers() {
    //データのやりとり
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
  }


  async function listUsers() {
    const users = await getUsers();
    users.forEach(addList);
  }

  window.addEventListener("load", listUsers);
  button.addEventListener("click", listUsers);
}
