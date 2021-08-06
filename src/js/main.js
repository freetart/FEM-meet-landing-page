"use scrict";
import AOS from "aos";
AOS.init({ offset: 100, duration: 1000, once: true });

const preloaderEl = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloaderEl.classList.add("hide-preloader");
});
