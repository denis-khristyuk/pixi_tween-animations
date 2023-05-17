import * as PIXI from "pixi.js";

const appWidth = 800;
const appHeight = 640;

const app = new PIXI.Application({
  width: appWidth,
  height: appHeight,
  backgroundColor: 0xa6a6a6,
});

document.body.appendChild(app.view);
