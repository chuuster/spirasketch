import { clearCanvas, canvasEl, ctx } from "./index";

export class Spinner {
  constructor(start_x, start_y, radius, theta) {
    this.start_x = start_x;
    this.start_y = start_y;
    this.end_x = start_x + (radius * Math.cos(theta));
    this.end_y = start_y + (radius * Math.sin(theta));
    this.radius = radius;
    this.theta = theta;
    // this.spinSpinner = this.spinSpinner.bind(this);
  }

  drawSpinner() {
    ctx.beginPath();
    ctx.moveTo(this.start_x, this.start_y);
    ctx.lineTo(this.end_x, this.end_y);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
  }

  // spinSpinner() {
  //   if (this.theta <= (2 * Math.PI) + 0.01) {
  //     clearCanvas();
  //     this.theta += 0.01;
  //     this.drawSpinner();
  //   }
  //   window.requestAnimationFrame(this.spinSpinner);
  // }
}