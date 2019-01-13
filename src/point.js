import {clearCanvas} from "./index";

export class Spirograph {
  constructor({ctx, cx, cy, radii, ratio1, ratio2, thetaLimit}) {
    this.ctx = ctx;
    this.cx = cx;
    this.cy = cy;
    this.radii = radii;
    this.ratio1 = ratio1;
    this.ratio2 = ratio2;
    this.thetaLimit = thetaLimit;
  }
  
  sumRadii() {
    let sum = 0;
    for (let i = 0; i < this.radii.length; i++) {
      sum += this.radii[i];
    } 
    return sum; 
  }

  xyOffset(theta) {
    let xOffset = this.radii[0] + Math.cos(theta * this.ratio1);
    let yOffset = this.radii[0] + Math.sin(theta * this.ratio1);

    for(let i = 1; i < this.radii.length; i++) {
      xOffset += this.radii[i] * (Math.cos(theta * this.ratio2));
      yOffset += this.radii[i] * (Math.sin(theta * this.ratio2));
    }

    return [xOffset, yOffset];
  }

  drawSpirograph() {
    let x, y, theta;

    // Move to starting point (theta = 0)
    this.ctx.beginPath();
    this.ctx.moveTo(this.cx + this.sumRadii(), this.cy);

    // Draw segments from theta = 0 to theta = 2PI
    for (theta = 0; theta <= 2*Math.PI; theta += 0.01) {
      let offset = this.xyOffset(theta);
      x = this.cx + offset[0];
      y = this.cy + offset[1];
      this.ctx.lineTo(x, y);
      this.ctx.strokeStyle = "rgba(0,0,0,0.5)";
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