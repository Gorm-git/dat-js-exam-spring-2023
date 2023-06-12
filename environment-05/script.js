"use strict";

// Envo-5:
// 1. Fetch "runners.json" i script og gem det i en variabel.

// 2. Vis de 3 hurtigste runners på podiet på hjemmesiden
// og deres resultater med 2 decimaltal.

// 3. Vis de næste 7 hurtigste runners efter 3.
// pladsen i runner-ups listen på hjemmesiden med
// deres resultater (2 decimaltal igen)

window.addEventListener("load", initApp);

let runners = [];

async function initApp() {
  console.log("42");
  runners = await fetchJson();
  console.log(runners);
  showRunners();
  showBestRunner();
}

async function fetchJson() {
  const response = await fetch("runners.json");
  const data = response.json();

  return data;
}

function showRunners() {
  for (let index = 3; index < 10; index++) {
    const runner = runners[index];
    const html =
      /*html */
      `
    <li>${runner.name} - Time: ${runner.time}</li>
    `;
    document
      .querySelector("#runnerups-list")
      .insertAdjacentHTML("beforeend", html);
  }
}

function showBestRunner() {
  console.log(runners);
  runners.sort((a, b) => a.time - b.time);
  console.log(runners);

  const first = runners[0];
  const second = runners[1];
  const third = runners[2];

  document.querySelector("#gold-name").textContent = first.name;
  document.querySelector("#gold-time").textContent = first.time;

  document.querySelector("#silver-name").textContent = second.name;
  document.querySelector("#silver-time").textContent = second.time;

  document.querySelector("#bronze-name").textContent = third.name;
  document.querySelector("#bronze-time").textContent = third.time;
}
