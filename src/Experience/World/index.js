import { Scene } from "three";

import { Cube } from "./Cube";
import { Model } from "./Model";
import { Environment } from "./Environment";

export class World extends Scene {
  constructor(camera) {
    super();
    this.camera = camera;
    this.setup();
  }

  resourcesLoaded() {
    this.model.resourcesLoaded();
  }

  setup() {
    this.add(this.camera);

    this.environment = new Environment(this);
    this.add(this.environment);

    this.cube = new Cube();
    this.add(this.cube);

    this.model = new Model("gear");
    this.add(this.model);

  }

  update(delta) {
    this.cube.update(delta);
    this.model.update(delta);
  }
}
