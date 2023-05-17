import { Application, Assets, Graphics } from "pixi.js";
import { assetsMap } from "./assetsMap.js";

const appWidth = 800;
const appHeight = 800;

const app = new Application({
  width: appWidth,
  height: appHeight,
  backgroundColor: 0xa6a6a6,
  view: document.getElementById("canvas"),
});
const runGame = () => {
  const marker = new Graphics();
  marker.beginFill(0xff0000, 1);
  marker.drawCircle(appWidth / 2, appHeight / 2, 5);
  marker.endFill();
  app.stage.addChild(marker);
};

await assetsMap.sprites.forEach((item) => Assets.load(item.url));
runGame();

document.body.appendChild(app.view);
