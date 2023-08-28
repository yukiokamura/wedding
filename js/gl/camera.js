import { PerspectiveCamera, Vector3 } from "three";

const lookat = new Vector3(0, 0, 0);

export class Camera extends PerspectiveCamera {
  constructor() {
    super(45, 1, 1, 100000);
    this.lookAt(lookat);
  }

  onResize(w, h) {
    this.aspect = w / h;
  }
}
