import { PaperSvg } from "./js/paparsvg";
import { InputSvg } from "./js/input-svg";
// import "./js/loading.js";
import { showOp } from "./js/loading";
import { kvResize } from "./js/kvheight";
document.querySelectorAll(".border-bg").forEach((el) => {
  new PaperSvg(el);
});

document.querySelectorAll(".input-wrap-svg").forEach((el) => {
  new InputSvg(el);
});
//
// import "./js/mv";

import "./js/googleMap";

// show();

import "./js/form";

import { anchor } from "./js/anchor";

document.querySelectorAll(".js-anchor").forEach((el) => {
  anchor(el);
});

const viewport = document.querySelector('meta[name="viewport"]');

const resizer = new ResizeObserver(() => {
  kvResize();
  const value =
    window.outerWidth > 360
      ? "width=device-width,initial-scale=1"
      : "width=360";
  if (viewport.getAttribute("content") !== value) {
    viewport.setAttribute("content", value);
  }
});

resizer.observe(document.body);

document.addEventListener("DOMContentLoaded", () => {
  kvResize();
  setTimeout(() => {
    showOp();
  }, 1000);
});
