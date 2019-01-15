import { clearCanvas, canvasEl, ctx } from "./index";

export class Spinner {
  constructor(start_x, start_y, radius, theta) {
    this.start_x = start_x;
    this.start_y = start_y;
    this.end_x = start_x + (radius * Math.cos(theta));
    this.end_y = start_y + (radius * Math.sin(theta));
    this.radius = radius;
    this.theta = theta;
  }

  drawSpinner() {
    ctx.beginPath();
    ctx.moveTo(this.start_x, this.start_y);
    ctx.lineTo(this.end_x, this.end_y);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
  }
}