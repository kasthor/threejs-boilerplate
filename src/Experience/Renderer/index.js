import { WebGLRenderer } from "three";

export class Renderer {
  constructor(world) {
    this.world = world;
    this.camera = this.world.camera;
    this.viewport = this.camera.viewport;
    this.renderer = new WebGLRenderer({ canvas: this.viewport.canvas });

    this.resize();
  }

  resize(){
    this.renderer.setSize(this.viewport.width,
    this.viewport.height)
  }

  update() {
    this.renderer.render(this.world, this.camera);
  }
}
