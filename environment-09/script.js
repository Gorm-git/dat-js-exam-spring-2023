"use strict";

window.addEventListener("load", initApp);

let posts = [];

async function initApp() {
  console.log("42");
  posts = await fetchPost();
  console.log(posts);
  document.querySelector("#sortorder").addEventListener("change", sortPosts);
  sortPosts();
  showPosts();
}

async function fetchPost() {
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
  const html =
    /*html */
    `
  <article>
    <img src="${post.image}" alt="${post.caption}" />
    <h2>${post.caption}</h2>
    <p>Likes: ${post.likes}</p>
    <div>
      <button class="like">Like</button>
      <button class="dislike">Dislike</button>
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

function sortPosts() {
  const selected = document.querySelector("#sortorder").value;
  let sortedPosts = posts;
  if (selected === "ascending") {
    sortedPosts = sortedPosts.sort((a, b) => a.likes - b.likes);
  } else if (selected === "descending") {
    sortedPosts = sortedPosts.sort((a, b) => b.likes - a.likes);
  }
  showPosts(sortedPosts);
}

function likePost(post) {
  console.log(post);
  post.likes++;
  console.log(post.likes);
  sortPosts();
}

function dislikePost(post) {
  console.log(post);
  post.likes--;
  console.log(post.likes);
  sortPosts();
}
