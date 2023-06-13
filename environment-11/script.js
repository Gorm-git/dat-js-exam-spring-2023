"use strict";

// let posts = [];

// window.addEventListener("load", initApp);

// async function initApp() {
//   console.log("42");
//   posts = await getPosts();
//   console.log(posts);
//   showPosts();
// }

// async function getPosts() {
//   const response = await fetch("posts.json");
//   const data = await response.json();

//   return data;
// }

// function showPosts() {
//   document.querySelector("#posts-list").innerHTML = "";

//   for (const post of posts) {
//     showPost(post);
//   }
// }

// function showPost(post) {
//   const html = /*html */ `

//   <article>
//     <img src="${post.image}" alt="${post.caption}" />
//     <h2>${post.caption}</h2>
//     <p>Likes: ${post.likes}</p>
//     <div>
//     <button class="delete">Delete</button>
//     </div>
//   </article>

//   `;
//   document.querySelector("#posts-list").insertAdjacentHTML("beforeend", html);

//   document
//     .querySelector("#posts-list article:last-child button")
//     .addEventListener("click", () => removePost(post));
// }

// function removePost(post) {
//   console.log(post);
//   const index = posts.indexOf(post);
//   posts.splice(index, 1);

//   showPosts();
// }

// 1. fetch json filen, og sæt det ind i en variabel

// 2. Vis post på hjemmesiden

// 3. På remove knappen slet et event

let posts = [];

window.addEventListener("load", initApp);

async function initApp() {
  console.log("42");
  posts = await getPosts();
  console.log(posts);
  showPosts();
}

async function getPosts() {
  const response = await fetch("posts.json");
  const data = response.json();

  return data;
}

function showPosts() {
  document.querySelector("#posts-list").innerHTML = "";

  for (const post of posts) {
    showPost(post);
  }
}

function showPost(post) {
  const html = /*html */ `

 <article>
    <img src= ${post.image} alt= ${post.caption} />
    <h2>${post.caption}</h2>
    <p>Likes: ${post.likes}</p>
    <button>Remove</button>
 </article>

`;
  document.querySelector("#posts-list").insertAdjacentHTML("beforeend", html);

  document
    .querySelector("#posts-list article:last-child button")
    .addEventListener("click", () => deletePost(post));
}

function deletePost(post) {
  console.log(post);
  const index = posts.indexOf(post);
  posts.splice(index, 1);
  showPosts();
}
