"use strict";
let accordion = document.querySelectorAll(".accordion-block");
accordion.forEach(function (event) {
  event.addEventListener("click", function () {
    this.classList.toggle("show");
  });
});
