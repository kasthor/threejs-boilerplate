import { Viewport } from "./Viewport";
import { Camera } from "./Camera";
import { World } from "./World";
import { Renderer } from "./Renderer";
import { Timer } from "./Timer";
import { Pane } from "./Pane";
import { Resources } from "./Resources"

export class Experience {
  constructor(canvas) {
    this.viewport = new Viewport(canvas);
    this.camera = new Camera(this.viewport);
    this.world = new World(this.camera);
    this.renderer = new Renderer(this.world);
    this.timer = new Timer();
    this.resources = new Resources();
    this.pane = new Pane(this, { expanded: window.location.hash === "#debug" });

    this.viewport.on("resize", this.resize.bind(this));
    this.timer.on("tick", this.update.bind(this));
    this.resources.on("loaded", this.resourcesLoaded.bind(this));
  }

  resourcesLoaded() {
    this.world.resourcesLoaded();
  }

  resize() {
    this.renderer.resize();
    this.camera.resize();
  }
  update(delta) {
    this.world.update(delta);
    this.renderer.update(delta);
  }
}
