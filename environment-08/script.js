"use strict";

// Envo-8:

// 1. Lav en funktion, der henter "posts.json" ind i script.js.
// Gem listen i en variabel.

// 2. Vis posts på hjemmesiden sorteret efter flest likes.

// 3. Tilføj 2 knapper, hhv. "upvote" og "downvote" i hver post,
// og lav funktioner til disse knapper, der hhv. tilføjer eller
// fjerner et like fra en post. Opdater visningen af listen på
// hjemmesiden dernest (stadig sorteret efter flest likes)

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
  const data = await response.json();

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
    <img src="${post.image}" alt="${post.caption}" />
    <h2>${post.caption}</h2>
    <p>Likes: ${post.likes}</p>
    <div>
      <button class = "like">Like</button>
      <button class = "dislike">Dislike</button>
    </div>
  </article>
                    
  `;
  document.querySelector("#posts-list").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("#posts-list article:last-child .like")
    .addEventListener("click", () => likePost(post));
  document
    .querySelector("#posts-list article:last-child .dislike")
    .addEventListener("click", () => dislikePost(post));
}

function likePost(post) {
  console.log(post);
  post.likes++;
  console.log(post.likes);
  showPosts();
}

function dislikePost(post) {
  console.log(post);
  post.likes--;
  console.log(post.likes);
  showPosts();
}
