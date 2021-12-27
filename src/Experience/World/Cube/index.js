import { MeshBasicMaterial } from "three";
import { BoxGeometry } from "three";
import { Mesh } from "three";

export class Cube extends Mesh {
  constructor(dimension) {
    super(
      new BoxGeometry(dimension, dimension, dimension),
      new MeshBasicMaterial({ wireframe: true })
    );
    this.setup();
  }

  setup() {
    this.position.set(0, 0, -2);
  }

  update(delta) {
    this.rotation.z += 0.1 * delta;
    this.rotation.x += 0.1 * delta;
  }
}
