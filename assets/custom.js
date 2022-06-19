"use strict";

const mainBody = document.querySelector(".js-main");
const overlayContainer = document.querySelector(".js-goldbeck-overlay");
const firstLoad = localStorage.getItem("first_time");

if (firstLoad) {
  window.addEventListener("load", function () {
    setTimeout(() => {
      overlayContainer.classList.add("goldbeck-overlay__fade");
      mainBody.classList.remove("goldbeck-overlay__is-hidden");
    }, 2000);

    setTimeout(() => {
      overlayContainer.classList.add("goldbeck-overlay__is-hidden");
    }, 3750);
  });
} else {
  overlayContainer.classList.add("goldbeck-overlay__is-hidden");
}
