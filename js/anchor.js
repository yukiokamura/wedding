import { gsap } from "gsap";

export const anchor = (el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(el.dataset.target);

    const top = target.getBoundingClientRect().top;

    let h = top + window.scrollY;
    if (el.dataset.margin) {
      h -= el.dataset.margin;
    }
    const v = {
      s: window.scrollY,
    };
    gsap.to(v, 1, {
      s: h,
      onUpdate() {
        window.scrollTo(0, v.s);
      },
      ease: "expo.out",
    });

    return false;
  });
};
