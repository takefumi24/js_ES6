"use strict";

{
  const button = document.getElementById("addBtn");
  const lists = document.getElementById("lists");
  button.addEventListener('click', async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);
  });

}
