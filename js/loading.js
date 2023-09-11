import gsap from "gsap";
import { MorphSVGPlugin } from "./plugins/MorphSVGPlugin";
import { DrawSVGPlugin } from "./plugins/DrawSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(DrawSVGPlugin);
import { loading, show } from "./opening";
export const showOp = async () => {
  const tl = gsap.timeline();
  const logo = document.querySelector("#logo");
  const logosvg = document.querySelector(".loading-logo");

  const inner = document.querySelector(".kv-img-main-inner");
  const waku = document.querySelector(".loading-waku");
  const loadingInner = document.querySelector(".loading-waku-stroke");

  const rect = inner.getBoundingClientRect();
  const loadingRect = loadingInner.getBoundingClientRect();

  const masky = document.querySelector(".logo-y");
  const maskt1 = document.querySelector(".logo-t1");
  const maskt2 = document.querySelector(".logo-t2");

  gsap.set(masky, {
    drawSVG: "0%",
  });

  gsap.set(maskt1, {
    drawSVG: "0%",
  });
  gsap.set(maskt2, {
    drawSVG: "0%",
  });
  const center = {
    x: rect.left + rect.width * 0.5,
    y: rect.top + rect.height * 0.5,
  };

  const loadingCenter = {
    x: loadingRect.left + loadingRect.width * 0.5,
    y: loadingRect.top + loadingRect.height * 0.5,
  };

  gsap.set(waku, {
    x: center.x - loadingCenter.x,
    y: center.y - loadingCenter.y,
  });
  console.log(masky.getTotalLength() / 1000, maskt1.getTotalLength() / 1000);
  await loading();
  tl.set(
    logosvg,
    {
      opacity: 1,
    },
    0
  )
    .to(
      loadingInner,
      1,
      {
        scale: 1,
        ease: "power2.inOut",
        opacity: 1,
      },
      0
    )
    .to(
      masky,
      1.45,
      {
        drawSVG: "100%",
        ease: "ease.none",
      },
      0
    )
    .to(
      maskt1,
      1.2,
      {
        drawSVG: "100%",
        ease: "ease.none",
      },
      0
    )
    .to(
      maskt2,
      1.2,
      {
        drawSVG: "100%",
        ease: "ease.none",
      },
      0.2 + 0.3
    )
    //まわる
    .to(
      logo,
      2,
      {
        morphSVG: "#circle",
        ease: "power2.inOut",
      },
      0
    )
    .to(
      loadingInner,
      2,
      {
        rotation: 180,
        ease: "power2.in",
      },
      0
    )
    //まわる
    .to(
      logo,
      2,
      {
        morphSVG: logo,
        ease: "power2.inOut",
      },
      2
    )
    .to(
      loadingInner,
      2,
      {
        rotation: 360,
        ease: "power2.inOut",
      },
      2
    )
    //まわる
    .to(
      logo,
      2,
      {
        morphSVG: "#circle",
        ease: "power2.inOut",
      },
      4
    )
    .to(
      loadingInner,
      2,
      {
        rotation: 360 + 180,
        ease: "power2.in",
      },
      4
    )
    .to(
      loadingInner,
      8.5 - 0.7 - 7,
      {
        scale: 0.98,
        ease: "ease.in",
      },
      7
    )
    .to(
      logosvg,
      8.5 - 0.7 - 7 + 1,
      {
        opacity: 0,
        ease: "power4.inOut",
      },
      7
    );

  tl.to(
    loadingInner,
    1.7,
    {
      scale: inner.clientWidth / loadingInner.clientWidth,
      ease: "power3.out",
    },
    8.5 - 0.7
  )
    .to(
      [loadingInner],
      1,
      {
        opacity: 0,
        ease: "power4.inOut",
        onComplete: () => {
          document.querySelector(".loading").remove();
        },
      },
      8.5 - 0.7
    )
    .add(show(), 7.3);
};

// showOp();
