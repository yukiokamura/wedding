import { PaperSvg } from "./js/paparsvg";
import { InputSvg } from "./js/input-svg";
import Cookies from "js-cookie";
import axios from "axios";
const APIURL = "https://wedding.yukiokamura.com/api/";

// const APIURL = "http://localhost:3002/api/";
document.querySelectorAll(".border-bg").forEach((el) => {
  new PaperSvg(el);
});

document.querySelectorAll(".input-wrap-svg").forEach((el) => {
  new InputSvg(el);
});

document.querySelector(".backbtn").addEventListener("click", () => {
  location.href = "/?back=1/#attendance";
});

const data = JSON.parse(Cookies.get("formData"));

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const result = await axios
    .post(APIURL, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then(({ data }) => data);
  console.log(result);
  if (result === "success") {
    console.log("aaa");
    location.href = "/thankyou/";
  } else {
    console.log("aaabb");
    location.href = "/thankyou/?error=1";
  }
  return false;
});

console.log(data);
document.querySelector(".js-attendance").textContent =
  data.attendance === "1" ? "ご出席" : "ご欠席";
document.querySelector(".js-attendance-name").textContent =
  data.sei + data.namae;
document.querySelector(".js-attendance-kana").textContent =
  data["sei-furigana"] + data["namae-furigana"];
document.querySelector(".js-attendance-mail").textContent = data["mail"];
document.querySelector(".js-attendance-tel").textContent = data["tel"];
document.querySelector(".js-attendance-number").textContent = data["number"];
document.querySelector(".js-attendance-address").textContent = data["address"];
document.querySelector(".js-attendance-allergie").textContent =
  data["allergie"] || "特になし";
document.querySelector(".js-attendance-message").textContent = data["message"];
