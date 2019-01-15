import {clearCanvas, canvasEl, ctx} from "./index";
import { Spinner } from "./spinner";

export class Spirograph {
  constructor({radii, ratio, thetaLimit}) {
    this.cx = canvasEl.width/2;
    this.cy = canvasEl.height/2;
    this.radii = radii;
    this.ratio = ratio;
    this.thetaLimit = thetaLimit;
    this.animateSpirograph = this.animateSpirograph.bind(this);
  }
  
  sumRadii() {
    let sum = 0;
    for (let i = 0; i < this.radii.length; i++) {
      sum += this.radii[i];
    } 
    return sum; 
  }

  xyOffset(theta) {
    let xOffset = this.radii[0] * Math.cos(theta * this.ratio[0]);
    let yOffset = this.radii[0] * Math.sin(theta * this.ratio[0]);

    for(let i = 1; i < this.radii.length; i++) {
      xOffset += this.radii[i] * (Math.cos(theta * this.ratio[i]));
      yOffset += this.radii[i] * (Math.sin(theta * this.ratio[i]));
    }

    return [xOffset, yOffset];
  }

  createSpinners() {
    let spinners = [];
    spinners.push(new Spinner(this.cx, this.cy, this.radii[0], this.thetaLimit * this.ratio[0]));

    for(let i = 1; i < this.radii.length; i++) {  
      spinners.push(
        new Spinner(spinners[i-1].end_x, spinners[i-1].end_y, this.radii[i], this.thetaLimit * this.ratio[i])
      );
    }

    return spinners;
  }

  drawSpirograph() {
    let x, y, theta;

    ctx.beginPath();
    ctx.moveTo(this.cx + this.sumRadii(), this.cy);

    // Draw segments from theta = 0 to thetaLimit
    for (theta = 0; theta <= this.thetaLimit; theta += 0.01) {
      let offset = this.xyOffset(theta);
      x = this.cx + offset[0];
      y = this.cy + offset[1];
      ctx.lineTo(x, y);
      ctx.strokeStyle = "rgba(0,0,0,0.5)";
    }

    ctx.stroke();
  }

  animateSpirograph() {
    if (!window.stopAnimation) {

      if (this.thetaLimit <= 2 * Math.PI) {
        clearCanvas();
        this.thetaLimit += 0.01;
        this.drawSpirograph();
        this.createSpinners().forEach((spinner) => {
          spinner.drawSpinner();
        });
      }
      
      window.animationFrameId = window.requestAnimationFrame(this.animateSpirograph);
    }
  }
}
