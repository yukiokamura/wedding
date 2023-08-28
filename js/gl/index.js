import { Renderer } from "./renderer";
import { Camera } from "./camera";
import { Color, Scene } from "three";
import { Plane } from "./plane";
export class GL {
  constructor(wrap) {
    this.wrap = wrap;
    this.canvas = this.wrap.querySelector("canvas");
    this.renderer = new Renderer(this.canvas);

    this.camera = new Camera();
    this.scene = new Scene();
    this.plane = new Plane();
    this.scene.add(this.plane);

    this.scene.background = new Color(0xffffff);

    this.load();
    // this.onResize();
    this.onUpdate();

    const resizer = new ResizeObserver(this.onResize.bind(this));

    resizer.observe(this.wrap);
  }

  async load() {
    await this.plane.load();
  }

  onResize() {
    console.log("11");
    const w = this.wrap.clientWidth;
    const h = this.wrap.clientHeight;

    this.renderer.onResize(w, h);
    this.camera.onResize(w, h);
    this.plane.onReize(w, h);
  }

  onUpdate(t) {
    this.plane.onUpdate();
    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(this.onUpdate.bind(this));
  }
}
