"use strict";

const body = document.querySelector("body");
const mainBody = document.querySelector(".js-main");
const overlayContainer = document.querySelector(".js-goldbeck-overlay");

if (!sessionStorage.visited) {
  window.addEventListener("load", function () {
    overlayContainer.classList.remove("goldbeck-overlay__is-hidden");
    body.classList.remove("goldbeck-overlay__background");
    setTimeout(() => {
      overlayContainer.classList.add("goldbeck-overlay__fade");
      mainBody.classList.remove("goldbeck-overlay__is-hidden");
    }, 2000);

    setTimeout(() => {
      overlayContainer.classList.add("goldbeck-overlay__is-hidden");
    }, 3750);
    sessionStorage.visited = true;
  });
} else {
  body.classList.remove("goldbeck-overlay__background");
  overlayContainer.classList.add("goldbeck-overlay__is-hidden");
  mainBody.classList.remove("goldbeck-overlay__is-hidden");
}
