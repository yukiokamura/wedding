import { TextAnimaiton } from "./lottie";
import gsap from "gsap";
const textAnimation = [];
document.querySelectorAll(".js-lootieAnimation").forEach((el) => {
  const path = el.dataset.path;
  textAnimation.push(new TextAnimaiton(path, el));
});

const sideber = document.querySelectorAll(".sidebar-wrap");
const p = textAnimation.map((t) => t.isLoaded());

const bg = document.querySelector(".kv");
const waku = document.querySelector(".kv-img-main-waku");
const kvimg = document.querySelector(".kv-img-main-img");
const deco1 = textAnimation.find((e) =>
  e.dom.classList.contains("kv-img-deco1")
);
const deco2 = textAnimation.find((e) =>
  e.dom.classList.contains("kv-img-deco2")
);

deco1.animation.setSpeed(1.25);
deco2.animation.setSpeed(1);

const subText = document.querySelectorAll(".kv-text-sub");
const mainText = document.querySelectorAll(".kv-text-name");
const mainEnText = document.querySelectorAll(".kv-text-en");
const rsvpBtn = document.querySelector(".kv-goto-rsvp");

const namedeco1 = textAnimation.find((e) =>
  e.dom.classList.contains("kv-text-name-deco1")
);
namedeco1.animation.setSpeed(0.8);
const namedeco2 = textAnimation.find((e) =>
  e.dom.classList.contains("kv-text-name-deco2")
);
namedeco2.animation.setSpeed(0.8);

const header = document.querySelector(".header");
export const show = async () => {
  await Promise.all(p);
  const tl = gsap.timeline();
  tl.to(bg, 1.75, {
    "background-color": "rgba(255, 255, 255, 0)",
    ease: "power2.inOut",
  })
    .to(
      waku,
      1,
      {
        opacity: 1,
        ease: "power2.inOut",
      },
      0.75
    )
    .to(
      kvimg,
      1,
      {
        opacity: 1,
        ease: "power2.inOut",
      },
      1
    )
    .add(() => {
      deco1.start();
    }, 1.5)
    .add(() => {
      deco2.start();
    }, 2.5)
    .to(
      subText,
      0.75,
      {
        x: 0,
        ease: "power2.out",
      },
      3
    )
    .to(
      subText,
      0.75,
      {
        opacity: 1,
        ease: "power2.inOut",
      },
      3
    )
    .to(
      sideber,
      0.75,
      {
        x: 0,
        ease: "power2.inOut",
        opacity: 1,
      },
      3
    )
    .to(
      mainText,
      0.75,
      {
        x: 0,
        ease: "power2.out",
      },
      3.05
    )
    .to(
      mainText,
      0.75,
      {
        opacity: 1,
        ease: "power2.inOut",
      },
      3.05
    )
    .to(
      mainEnText,
      0.75,
      {
        x: 0,
        ease: "power2.out",
      },
      3.12
    )
    .to(
      mainEnText,
      0.75,
      {
        opacity: 1,
        ease: "power2.inOut",
      },
      3.12
    )

    .to(
      header,
      0.75,
      {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
      },
      3.15
    )
    .to(
      rsvpBtn,
      0.75,
      {
        opacity: 1,

        ease: "power2.in",
      },
      3.75
    )
    .add(() => {
      namedeco1.start();
      namedeco2.start();
    }, 4);
};
