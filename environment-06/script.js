"use strict";

const runnerList = [];

window.addEventListener("load", start);

function start() {
  console.log("42");
  createRunner("runner1", 51);
  createRunner("runner1", 52);
  createRunner("runner1", 53);
  createRunner("runner1", 54);
  createRunner("runner1", 55);
  createRunner("runner1", 56);
  createRunner("runner1", 57);
  createRunner("runner1", 58);
  createRunner("runner1", 59);
  createRunner("runner1", 60);
  createRunner("runner1", 61);
  createRunner("runner1", 62);
  createRunner("runner1", 63);
  createRunner("runner1", 64);

  bestRunners();
  showRunner();
  console.log(runnerList);
}

function createRunner(name, time) {
  const newRunner = {
    name,
    time,
  };

  runnerList.push(newRunner);
  console.log(runnerList);
}

function showRunner() {
  for (let index = 3; index < 14; index++) {
    const runner = runnerList[index];

    const html =
      /*html */
      `
    <li>${runner.name} - time: ${runner.time}</li>
    `;
    document
      .querySelector("#runnerups-list")
      .insertAdjacentHTML("beforeend", html);
  }
}

function bestRunners() {
  console.log(runnerList);

  runnerList.sort((a, b) => a.time - b.time);
  console.log(runnerList);

  const first = runnerList[0];
  const second = runnerList[1];
  const third = runnerList[2];

  document.querySelector("#gold-name").textContent = first.name;
  document.querySelector("#gold-time").textContent = first.time;

  document.querySelector("#silver-name").textContent = second.name;
  document.querySelector("#silver-time").textContent = second.time;

  document.querySelector("#bronze-name").textContent = third.name;
  document.querySelector("#bronze-time").textContent = third.time;
}
