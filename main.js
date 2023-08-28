import { PaperSvg } from "./js/paparsvg";
import { InputSvg } from "./js/input-svg";
document.querySelectorAll(".border-bg").forEach((el) => {
  new PaperSvg(el);
});

document.querySelectorAll(".input-wrap-svg").forEach((el) => {
  new InputSvg(el);
});

import "./js/mv";

import { show } from "./js/opening";

import "./js/googleMap";

show();

import "./js/form";

import { anchor } from "./js/anchor";

document.querySelectorAll(".js-anchor").forEach((el) => {
  anchor(el);
});
