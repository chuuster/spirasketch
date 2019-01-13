import { Spirograph } from "./point";

export const windowDimensions = { "height": window.innerHeight, "width": window.innerWidth };
export const canvasEl = document.getElementById("canvas");
export const ctx = canvasEl.getContext("2d");

export function clearCanvas() {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("webpack is working");
  canvasEl.setAttribute("width", windowDimensions.width * window.devicePixelRatio);
  canvasEl.setAttribute("height", windowDimensions.height * window.devicePixelRatio);
});

canvasEl.addEventListener("click", () => {
  let spiro = new Spirograph({
    ctx: ctx,
    cx: (canvasEl.width / 2),
    cy: (canvasEl.height / 2),
    radius1: Math.floor(Math.random() * canvasEl.height/9) + 25,
    radius2: Math.floor(Math.random() * canvasEl.height/9) + 25,
    radius3: Math.floor(Math.random() * canvasEl.height/9) + 25,
    radius4: Math.floor(Math.random() * canvasEl.height/9) + 25,
    ratio1: Math.random() * 1000000000,
    ratio2: Math.random() * 1000000000,
    thetaLimit: 2 * Math.PI
  });

  console.log(spiro);
  clearCanvas();
  spiro.drawSpirograph();
});
