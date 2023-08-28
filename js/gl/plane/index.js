import {
  Object3D,
  PlaneGeometry,
  RawShaderMaterial,
  Mesh,
  TextureLoader,
  Vector2,
} from "three";
import frag from "./shader.frag";
import vert from "./shader.vert";

export class Plane extends Object3D {
  constructor() {
    super();

    const g = new PlaneGeometry(2, 2);
    const m = new RawShaderMaterial({
      uniforms: {
        uTex: {
          value: null,
        },
        resolution: {
          value: new Vector2(),
        },
        wResolution: {
          value: new Vector2(),
        },
        scrollY: {
          value: 0,
        },
      },
      vertexShader: vert,
      fragmentShader: frag,
    });

    const mesh = new Mesh(g, m);
    this.mesh = mesh;
    this.add(mesh);
  }

  async load() {
    const loader = new TextureLoader();
    const t = await loader.loadAsync("/img/bg-pattern-flower.jpg");
    this.mesh.material.uniforms.uTex.value = t;
    this.mesh.material.uniforms.resolution.value.set(438 * 2, 389 * 2);
  }

  onReize(w, h) {
    this.mesh.material.uniforms.wResolution.value.set(w, h);
  }

  onUpdate() {}
}
