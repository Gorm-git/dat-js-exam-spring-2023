"use strict";

let tickets = [];

window.addEventListener("load", initApp);

async function initApp() {
  console.log("42");
  tickets = await getTickets();
  console.log(tickets);
  document
    .querySelector("#tickets-list")
    .addEventListener("change", usedTicket);
  showTickets();
}

async function getTickets() {
  const response = await fetch("tickets.json");
  const data = response.json();

  return data;
}

function showTickets() {
  document.querySelector("#tickets-list").innerHTML = "";
  for (const ticket of tickets) {
    if (ticket.used === false) {
      showTicket(ticket);
    }
  }
}

function showTicket(ticket) {
  const html = /*html */ `
    <article>
      <h3>${ticket.eventName}</h3>
      <p class="ticketid">id: ${ticket.id}</p>
      <p>Is the ticket used: ${ticket.used}</p>
      <button>Use</button>
    </article>
  `;
  document.querySelector("#tickets-list").insertAdjacentHTML("beforeend", html);

  document
    .querySelector("#tickets-list article:last-child button")
    .addEventListener("click", () => usedTicket(ticket));
}

function usedTicket(ticket) {
  if (ticket.used === false) {
    ticket.used = true;
    showTickets();
    console.log(ticket);
  }
}
