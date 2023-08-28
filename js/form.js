import Cookies from "js-cookie";

const form = document.querySelector("form");
const path = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";

form.number.addEventListener("input", async (e) => {
  const num = form.number.value;
  const pattern = /^[0-9]{7}$/;

  if (pattern.test(num)) {
    console.log(num);
    const data = await fetch(path + num).then((e) => e.json());
    if (data.results) {
      const address =
        data.results[0].address1 +
        data.results[0].address2 +
        data.results[0].address3;
      if (form.address.value === "") form.address.value = address;
    } else {
    }
  } else {
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);

  const data2 = {};

  for (let value of data.entries()) {
    data2[value[0]] = value[1];
  }
  Cookies.set("formData", JSON.stringify(data2));

  location.href = "/confirmation/";

  return false;
});

const btns = document.querySelectorAll(".attendance-form-btn");
btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    console.log(form.attendance.options[el.dataset.value - 0]);
    form.attendance.options[el.dataset.value - 0].selected = true;
    btns.forEach((el2) => el2.classList.remove("active"));
    el.classList.add("active");
  });
});

const data = Cookies.get("formData");

if (data) {
  const d = JSON.parse(data);
  console.log(d);
  if (d.attendance === "1") {
    form.attendance.options[1].selected = true;
    btns[0].classList.add("active");
  } else {
    form.attendance.options[0].selected = true;
    btns[1].classList.add("active");
  }

  form.sei.value = d.sei;
  form.namae.value = d.namae;
  form["sei-furigana"].value = d["sei-furigana"];
  form["namae-furigana"].value = d["namae-furigana"];
  form["mail"].value = d["mail"];
  form["number"].value = d["number"];
  form["tel"].value = d["tel"];
  form["address"].value = d["address"];
  form["allergie"].value = d["allergie"];
  form["message"].value = d["message"];
}
