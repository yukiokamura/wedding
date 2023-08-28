import {
  LinearSRGBColorSpace,
  NoColorSpace,
  SRGBColorSpace,
  WebGLRenderer,
} from "three";

export class Renderer extends WebGLRenderer {
  constructor(canvas) {
    super({
      canvas,
      alpha: true,
      antialias: true,
    });
    this.outputColorSpace = LinearSRGBColorSpace;
    this.setPixelRatio(window.devicePixelRatio);
    this.debug = false;
  }

  onResize(w, h) {
    this.setSize(w, h);
  }
}
