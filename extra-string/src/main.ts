import { device } from "../shared/device";
import manifest from "./appmeta/manifest.json";
export default function run() {
  const draw = () => device.DisplayDraw({app_id: manifest.id, elements: [{id: "clock", type: "text", x: 1, y: 3, text: new Date().toISOString().slice(11, 16), color: "#ffffff"}]});
  void draw();
  setInterval(draw, 1000);
}

import { injected } from "./generated.js"; console.log(injected);
