import { device } from "../shared/device";
export default function run() {
  const draw = () => device.DisplayDraw({app_id: "e2e.no_api_version", elements: [{id: "clock", type: "text", x: 1, y: 3, text: new Date().toISOString().slice(11, 16), color: "#ffffff"}]});
  void draw();
  setInterval(draw, 1000);
}
