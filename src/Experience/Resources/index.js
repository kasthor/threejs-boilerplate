import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { LoadingManager, TextureLoader } from "three";
import { EventEmitter } from "events";
import gear from "../../../assets/models/gear.glb";

export class Resources extends EventEmitter {
  constructor() {
    super();
    this.item = {};
    this.loaders = {};
    this.loadManager = new LoadingManager(
      this.loaded.bind(this),
      this.progress.bind(this)
    );
    this.loaders.texture = new TextureLoader(this.loadManager);
    this.loaders.gltf = new GLTFLoader(this.loadManager);

    window.resources = this;
    this.setup();
  }

  setup() {
    [{ id: "gear", type: "gltf", path: gear }].forEach(({ id, type, path }) =>
      this.loaders[type].load(path, (model) => this.updateResource(id, model))
    );
  }

  updateResource(id, model) {
    this.item[id] = model;
  }

  loaded() {
    this.emit("loaded");
  }

  progress(_, items, total) {
    this.emit("progress", Math.floor((items / total) * 100));
  }
}
