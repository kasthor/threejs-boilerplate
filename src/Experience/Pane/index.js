import { Pane as Tweakpane } from "tweakpane";

export class Pane extends Tweakpane {
  constructor(experience, options) {
    super(options);
    this.experience = experience;

    this.setup();
  }

  setup() {
    this.setupPerformance();
  }

  setupPerformance() {
    const folder = this.addFolder({ title: "Performance" });
    folder.addMonitor(this.experience.timer, "fps", {
      view: "graph",
      min: 0,
      max: 200,
    });
    folder.addMonitor(this.experience.timer, "fps");
  }
}
