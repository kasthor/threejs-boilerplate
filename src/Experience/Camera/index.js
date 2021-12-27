import { PerspectiveCamera } from "three";

export class Camera extends PerspectiveCamera {
  constructor(viewport) {
    super(75, viewport.aspect());
    this.viewport = viewport;
  }

  resize() {
    this.aspect = this.viewport.aspect();
    this.updateProjectionMatrix();
  }
}
