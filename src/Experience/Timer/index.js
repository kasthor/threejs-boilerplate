import EventEmiter from "events";
import { Clock } from "three";

export class Timer extends EventEmiter {
  constructor() {
    super();
    this.clock = new Clock();
    this.fps = 0;
    this.delta = 0;
    this.elapsedTime = 0;
    this.setup();
  }

  setup() {
    window.requestAnimationFrame(this.tick.bind(this));
  }

  tick() {
    this.delta = this.clock.getDelta();
    this.elapsedTime = this.clock.getElapsedTime();
    this.fps = 1 / this.delta;

    this.emit("tick", this.delta);
    window.requestAnimationFrame(this.tick.bind(this));
  }
}
