import { Scene } from "three";

import { Cube } from "./Cube";

export class World extends Scene {
  constructor(camera) {
    super();
    this.camera = camera;
    this.setup();
  }

  setup() {
    this.add(this.camera);

    this.cube = new Cube();

    this.add(this.cube);
  }

  update(delta) {
    this.cube.update(delta);
  }
}
