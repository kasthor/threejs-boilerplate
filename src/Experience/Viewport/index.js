import EventEmiter from "events";

export class Viewport extends EventEmiter {
  constructor(canvas) {
    super();
    this.canvas = canvas;
    this.setup();
  }

  setup() {
    this.setSizes();
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.setSizes();
    this.emit("resize", this);
  }

  aspect() {
    return this.width / this.height;
  }

  setSizes() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
}
