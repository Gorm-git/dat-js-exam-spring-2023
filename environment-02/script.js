"use strict";

// Envo-2:
// 1. Lav en liste og en funktion der, ud fra formen
// på hjemmesiden, kan lave et nyt athlet-objekt og
// gemme den i listen.

// 2. Vis de 3 hurtigste athleter på hjemmesiden.

// 3. Vis kun athleter med en topfart mellem 50 og 60.

// const athletes = [];

// window.addEventListener("load", initApp);

// function initApp() {
//   console.log("42");
//   createAthlete("Thomas1", 53);
//   createAthlete("Thomas2", 56);
//   createAthlete("Thomas3", 59);
//   createAthlete("Thomas4", 52);
//   createAthlete("Thomas5", 54);
//   createAthlete("Thomas6", 50);
//   createAthlete("Thomas7", 56);
//   createAthlete("Thomas8", 57);
//   createAthlete("Thomas9", 58);
//   createAthlete("Thomas10", 63);
//   createAthlete("Thomas11", 64);
//   createAthlete("Thomas12", 69);
//   createAthlete("Thomas13", 70);

//   document
//     .querySelector("#create-athlete-form")
//     .addEventListener("submit", createAthleteSubmit);

//   ShowTopThree();
//   ShowAthletesInRange();
// }

// function createAthlete(name, topSpeed) {
//   const newAthlete = { name: name, topSpeed: topSpeed };

//   athletes.push(newAthlete);
//   console.log(newAthlete);
//   console.log(athletes);
// }

// function createAthleteSubmit(event) {
//   event.preventDefault();
//   const form = event.target;

//   const name = form.name.value;
//   const topSpeed = Number(form.topSpeed.value);

//   createAthlete(name, topSpeed);

//   console.log(event);
// }

// function ShowTopThree() {
//   sortBySpeed();
//   for (let index = 0; index < 3; index++) {
//     const athlete = athletes[index];

//     const html = /*html */ `

//       <li>${athlete.name} - time: ${athlete.topSpeed}</li>

//     `;
//     document
//       .querySelector("#athletes-list")
//       .insertAdjacentHTML("beforeend", html);
//   }
// }

// function sortBySpeed() {
//   athletes.sort((a, b) => a.topSpeed - b.topSpeed);
// }

// function ShowAthletesInRange() {
//   const filteredAthletes = athletes.filter(
//     (athlete) => athlete.topSpeed >= 50 && athlete.topSpeed <= 60
//   );

//   for (let index = 3; index < filteredAthletes.length; index++) {
//     const athlete = filteredAthletes[index];

//     const html = /*html */ `
//       <li>${athlete.name} - time: ${athlete.topSpeed}</li>
//     `;
//     document
//       .querySelector("#athletes-list1")
//       .insertAdjacentHTML("beforeend", html);
//   }
// }

// 1. Opret liste med 3 athletes, som har navn og topSpeed som properties.
// Navn er en streng, topSpeed er nr

// 2. Vis listen af athletes på hjemmesiden

//3. opret en ny athelete ved hjælp af formen, og hvis det på hjemmesiden

const athletes = [
  { name: "Thomas1", topSpeed: 50 },
  { name: "Thomas2", topSpeed: 55 },
  { name: "Thomas3", topSpeed: 60 },
];

window.addEventListener("load", initApp);

function initApp() {
  console.log("42");
  document
    .querySelector("#create-athlete-form")
    .addEventListener("submit", createAthleteSubmit);
  // sortBySpeed();
  showAthletes();
}

function showAthletes() {
  document.querySelector("#athletes-list").innerHTML = "";

  for (const athlete of athletes) {
    showAthlete(athlete);
  }
}

function showAthlete(athletes) {
  const html = /*html */ `
  
  <li>${athletes.name}, Top fart: ${athletes.topSpeed}</li>

  `;
  document
    .querySelector("#athletes-list")
    .insertAdjacentHTML("beforeend", html);
}

function createAthlete(name, topSpeed) {
  const newAthlete = { name: name, topSpeed: topSpeed };

  athletes.push(newAthlete);
  console.log(newAthlete);
}

function createAthleteSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const name = form.name.value;
  const topSpeed = Number(form.topSpeed.value);

  createAthlete(name, topSpeed);
  sortBySpeed();
  showAthletes();
}

function sortBySpeed() {
  athletes.sort((low, high) => low.topSpeed - high.topSpeed);
}
