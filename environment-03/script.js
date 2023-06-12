"use strict";

// Envo-3:
// 1. Importer "data.js" i script-filen.
// Gem listen i en variabel.

// 2. Vis alle events på hjemmesiden sorteret
// efter tidligste dato øverst.

// 3. Filtrer, således kun events i sjette måned
// bliver vist på hjemmesiden.

import { events } from "./data.js";

let eventData = events;

window.addEventListener("load", initApp);

function initApp() {
  console.log("42");
  console.log(eventData);
  showEvents();
}

function showEvents() {
  document.querySelector("#events-list").innerHTML = "";
  eventData = events.filter((event) => {
    const eventDate = new Date(event.date);
    const month = eventDate.getMonth() + 1; // Add 1 since getMonth() returns zero-indexed months
    return month === 6; // 6 represents the sixth month (June)
  });
  for (const event of eventData) {
    showEvent(event);
  }
}

function showEvent(event) {
  const html =
    /*html */
    `
  <li>${event.date} - ${event.title}: ${event.description}</li>
  `;
  document.querySelector("#events-list").insertAdjacentHTML("beforeend", html);
}
