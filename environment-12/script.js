"use strict";

// 1. Fetch postnumre.json i script.js, og gem listen

// 2. Lav en tom liste  og en funktion som tilføjer et
// object til listen med hjælp fra formen

// 3. Lav en funktion som kan filtere for bynavne.
// Lav en alfabetisk sortering af bynavne,
// lav en sortering som kan tage fra høj til lav postnr

window.addEventListener("load", initApp);

let postNR = [];

async function initApp() {
  console.log("42");

  postNR = await fetchPostnumre();

  console.log(postNR);
}

async function fetchPostnumre() {
  const response = await fetch("postnumre.json");
  const dat = await response.json();

  return dat;
}

function createPostnumre(name) {}
