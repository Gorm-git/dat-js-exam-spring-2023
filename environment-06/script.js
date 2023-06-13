"use strict";

// const runnerList = [];

// window.addEventListener("load", start);

// function start() {
//   console.log("42");
//   createRunner("runner1", 51);
//   createRunner("runner1", 52);
//   createRunner("runner1", 53);
//   createRunner("runner1", 54);
//   createRunner("runner1", 55);
//   createRunner("runner1", 56);
//   createRunner("runner1", 57);
//   createRunner("runner1", 58);
//   createRunner("runner1", 59);
//   createRunner("runner1", 60);
//   createRunner("runner1", 61);
//   createRunner("runner1", 62);
//   createRunner("runner1", 63);
//   createRunner("runner1", 64);

//   bestRunners();
//   showRunner();
//   console.log(runnerList);
// }

// function createRunner(name, time) {
//   const newRunner = {
//     name,
//     time,
//   };

//   runnerList.push(newRunner);
//   console.log(runnerList);
// }

// function showRunner() {
//   for (let index = 3; index < 14; index++) {
//     const runner = runnerList[index];

//     const html =
//       /*html */
//       `
//     <li>${runner.name} - time: ${runner.time}</li>
//     `;
//     document
//       .querySelector("#runnerups-list")
//       .insertAdjacentHTML("beforeend", html);
//   }
// }

// function bestRunners() {
//   console.log(runnerList);

//   runnerList.sort((a, b) => a.time - b.time);
//   console.log(runnerList);

//   const first = runnerList[0];
//   const second = runnerList[1];
//   const third = runnerList[2];

//   document.querySelector("#gold-name").textContent = first.name;
//   document.querySelector("#gold-time").textContent = first.time;

//   document.querySelector("#silver-name").textContent = second.name;
//   document.querySelector("#silver-time").textContent = second.time;

//   document.querySelector("#bronze-name").textContent = third.name;
//   document.querySelector("#bronze-time").textContent = third.time;
// }

// 1. Lav 10 athlete objecter med forskellige hastigheder

// 2. Vis listen websited men kun dem som ikke er 4, og sorter dem.

// 3. Vis de top 3 på podiummet

const runners = [];

window.addEventListener("load", initApp);

function initApp() {
  console.log("42");
  createRunner("Thomas1", 51);
  createRunner("Thomas2", 52);
  createRunner("Thomas3", 53);
  createRunner("Thomas4", 58);
  createRunner("Thomas5", 56);
  createRunner("Thomas6", 69);
  createRunner("Thomas7", 72);
  createRunner("Thomas8", 50);
  createRunner("Thomas9", 80);
  createRunner("Thomas10", 70);
  console.log(runners);
  topRunners();
  showRunners();
}

function createRunner(name, topSpeed) {
  const newRunner = { name: name, topSpeed: topSpeed };

  runners.push(newRunner);
  console.log(runners);
}

function showRunners() {
  for (let index = 3; index < runners.length; index++) {
    const runner = runners[index];
    const html = /*html */ `
    
    <li>${runner.name}, topSpeed: ${runner.topSpeed}</li>
    
    `;
    document.querySelector("ol").insertAdjacentHTML("beforeend", html);
  }
}

function topRunners() {
  console.log(runners);
  runners.sort((a, b) => a.topSpeed - b.topSpeed);
  console.log(runners);
  const first = runners[0];
  const second = runners[1];
  const third = runners[2];

  document.querySelector("#gold-name").textContent = first.name;
  document.querySelector("#gold-time").textContent = first.topSpeed;

  document.querySelector("#silver-name").textContent = second.name;
  document.querySelector("#silver-time").textContent = second.topSpeed;

  document.querySelector("#bronze-name").textContent = third.name;
  document.querySelector("#bronze-time").textContent = third.topSpeed;
}
