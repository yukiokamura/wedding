import lottie from "lottie-web";

export class TextAnimaiton {
  constructor(path, dom) {
    this.dom = dom;
    this.animation = lottie.loadAnimation({
      container: dom,
      loop: false,
      renderer: "svg",
      autoplay: false,
      path,
    });
  }

  start() {
    this.animation.play();
  }

  isLoaded() {
    return new Promise((resolve) => {
      this.animation.addEventListener("DOMLoaded", resolve);
    });
  }
}
