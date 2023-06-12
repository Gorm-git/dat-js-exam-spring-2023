"use strict";

// Envo-7:
// 1. Lav en tom liste og en funktion,
// der kan tilføje rum til listen gennem formen.

// 2. Vis rummene på hjemmesiden. Længde,
// vidde og areal skal fremgå.

// 3. Lav EN funktion, der kan sortere rummene efter vidde, længde og areal.
// Opdater visningen dernæst. (Kan testes i konsollen på browseren)

const rooms = [];

window.addEventListener("load", initApp);

function initApp() {
  console.log("42");
  createRoom("Køkken", 10, 10, 100);
  createRoom("Stue", 15, 10, 150);
  createRoom("Loft", 10, 20, 200);
  createRoom("Kælder", 6, 6, 36);
  createRoom("Værelse", 6, 7, 42);
  createRoom("Walk-in-closet", 3, 8, 24);
  document
    .querySelector("#create-room-form")
    .addEventListener("submit", createRoomForm);
  sortRooms();
  showRooms();
}

function createRoom(name, width, length, calculated) {
  const newRoom = {
    name: name,
    width: width,
    length: length,
    calculated: calculated,
  };

  rooms.push(newRoom);
  console.log(newRoom);
}

function createRoomForm(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const width = Number(form.width.value);
  const length = Number(form.length.value);
  const calculated = width * length;

  // Hvis de spørger om en anden måde at gøre det på
  //  rooms.sort((a, b) => {
  //    const areaA = a.width * a.length;
  //    const areaB = b.width * b.length;
  //    if (a.width === b.width && a.length === b.length) {
  //      return areaA - areaB;
  //    }
  //    return 0;
  //  });

  createRoom(name, width, length, calculated);
  sortRooms();
  showRooms();
  console.log(rooms);
}

function showRooms() {
  for (const room of rooms) {
    showRoom(room);
  }
}

function showRoom(room) {
  const html =
    /*html */
    `
    <tr>
      <td>${room.name}</td>
      <td>${room.width}</td>
      <td>${room.length}</td>
      <td>${room.calculated} area</td>
     <tr>
  `;
  document.querySelector("#rooms-table").insertAdjacentHTML("beforeend", html);
}

function sortRooms() {
  // Sort by width
  rooms.sort((a, b) => a.width - b.width);

  // Sort by length if width is equal
  rooms.sort((a, b) => {
    if (a.width === b.width) {
      return a.length - b.length;
    }
    return 0;
  });
  rooms.sort((a, b) => {
    const areaA = a.width * a.length;
    const areaB = b.width * b.length;
    if (a.width === b.width && a.length === b.length) {
      return areaA - areaB;
    }
    return 0;
  });

  showRooms(); // Update the displayed list of rooms
}
