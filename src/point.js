import {clearCanvas} from "./index";

export class Spirograph {
  constructor({ctx, cx, cy, radius1, radius2, radius3, ratio1, ratio2, thetaLimit}) {
    this.ctx = ctx;
    this.cx = cx;
    this.cy = cy;
    this.radius1 = radius1;
    this.radius2 = radius2;
    this.radius3 = radius3;
    this.ratio1 = ratio1;
    this.ratio2 = ratio2;
    this.thetaLimit = thetaLimit;
  }
  
  drawSpirograph() {
    let x, y, theta;

    // Move to starting point (theta = 0)
    this.ctx.beginPath();
    this.ctx.moveTo(this.cx + this.radius1 + this.radius2 + this.radius3, this.cy);

    // Draw segments from theta = 0 to theta = 2PI
    for (theta = 0; theta <= 4*Math.PI; theta += 0.01) {
      x = this.cx + (this.radius1 * Math.cos(theta)) + (this.radius2 * Math.cos(theta * this.ratio1)) + (this.radius3 * Math.cos(theta * this.ratio2));
      y = this.cy + (this.radius1 * Math.sin(theta)) + (this.radius2 * Math.sin(theta * this.ratio1)) + (this.radius3 * Math.sin(theta * this.ratio2));
      this.ctx.lineTo(x, y);
    }

    // Apply stroke
    this.ctx.stroke();
  }

  animateSpirograph() {
    console.log("abc")
    while (this.thetaLimit <= 2 * Math.PI) {
      this.drawSpirograph();
      window.setInterval(() => 
      { clearCanvas(); this.thetaLimit += 0.05;}, 500);
    }
  }
}