"use strict";

// Envo-10:
// 1. Fetch "posts.json" i script.js. Gem listen i en variabel.

// 2. Vis kun posts, der er publiceret (true) på hjemmesiden.

// 3. Hvis "Show all posts" checkbox er krydset,
// så vis samtlige posts på hjemmesiden. Er den slået fra,
// vises kun publiceret posts.

window.addEventListener("load", initApp);

let posts = [];

async function initApp() {
  console.log("42");
  posts = await getPosts();
  console.log(posts);
  document.querySelector("#filter-form").addEventListener("change", showPosts);
  showPosts();
}

async function getPosts() {
  const response = await fetch("posts.json");
  const data = response.json();

  return data;
}

function showPosts() {
  document.querySelector("#posts-list").innerHTML = "";
  const checkbox = document.querySelector("#all");

  for (const post of posts) {
    if (post.published === true || checkbox.checked) {
      showPost(post);
    }
  }
}

function showPost(post) {
  const html =
    /*html */
    `
  <article>
    <img src="${post.image}" alt="${post.caption}" />
    <h2>${post.caption}</h2>
    <p>Likes: ${post.likes}</p>
  </article>
  `;
  document.querySelector("#posts-list").insertAdjacentHTML("beforeend", html);
}

// function filterCourses() {
//   const checked = document.querySelector("#all");
//   console.log(value);
//   let filteredPosts = []

//   if(value === checked ) {

//   }
// }
