import { Group } from "three";

export class Model extends Group {
  constructor(resource) {
    super();
    this.resource = resource;

    this.setup();
  }

  resourcesLoaded() {
    if (this.resource) this.setModel(window.resources.item[this.resource]);
  }

  setModel(model) {
    this.children.forEach((child) => {
      this.remove(child);
    });

    this.model = model;

    this.add(this.model.scene);
  }

  setup() {
    this.position.set(0, 0, -2);
  }

  update(delta) {
    this.rotation.z += 0.1 * delta;
    this.rotation.x += 0.1 * delta;
  }
}
