import { Spirograph } from "./point";

export const windowDimensions = { "height": window.innerHeight, "width": window.innerWidth };
export const canvasEl = document.getElementById("canvas");
export const ctx = canvasEl.getContext("2d");
export function clearCanvas() {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("webpack is working");
  canvasEl.setAttribute("width", windowDimensions.width);
  canvasEl.setAttribute("height", windowDimensions.height);
});

canvasEl.addEventListener("keydown", () => {
  let spiro = new Spirograph({
    ctx: ctx,
    cx: canvasEl.width / 2,
    cy: canvasEl.height / 2,
    radius1: Math.random() * 50,
    radius2: Math.random() * 100,
    radius3: Math.random() * 150,
    ratio1: Math.random() * 1000,
    ratio2: Math.random() * 1000,
    thetaLimit: 2 * Math.PI
  });

  console.log(spiro);
  
  clearCanvas();
  spiro.drawSpirograph();
});
