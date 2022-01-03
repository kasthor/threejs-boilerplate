import { AmbientLight, Color, Group } from "three";

export class Environment extends Group {
  constructor(scene) {
    super();
    this.scene = scene;
    this.setup();
  }

  setup() {
    this.light = new AmbientLight(new Color("white"), 10.0);

    this.scene.add(this.light);
  }
}
