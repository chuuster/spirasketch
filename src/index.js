import { numRotorsEl } from "./options";
import { Spirograph } from "./spiro";

export const canvasEl = document.getElementById("canvas");
export const ctx = canvasEl.getContext("2d");
export const clearCanvas = () => {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
};

const windowDimensions = { "height": window.innerHeight, "width": window.innerWidth };

// Set Up Canvas 
document.addEventListener("DOMContentLoaded", () => {
  canvasEl.setAttribute("width", windowDimensions.width * window.devicePixelRatio);
  canvasEl.setAttribute("height", windowDimensions.height * window.devicePixelRatio);
});

// Function to draw on canvas

export const drawOnCanvas = (animate = false) => {
  clearCanvas();

  let radii = [];
  for (let i = 1; i <= parseInt(numRotorsEl.value); i++) {
    radii.push(parseInt(document.getElementById(`radius${i}`).value));
  }

  let spiro = new Spirograph({
    radii: radii,
    ratio: parseInt(document.getElementById("ratio").value)
  });

  if (animate === true) {
    console.log("animate");
    spiro.thetaLimit = 0;
    spiro.animateSpirograph();
  } else {
    spiro.thetaLimit = 2 * Math.PI;
    spiro.drawSpirograph();
  }
};

// Randomize spirograph on click 
canvasEl.addEventListener("click", () => {
  
  // Fill out form element with randomized values 
  numRotorsEl.value = Math.floor(Math.random() * 9) + 2;
  numRotorsEl.dispatchEvent(new Event("input"));
  
  let numRadii = parseInt(numRotorsEl.value);
  
  for (let i = 1; i <= numRadii; i++) {
    document.getElementById(`radius${i}`).value = Math.floor(Math.random() * canvasEl.height / (2 * numRadii) + 10);
  }
  
  document.getElementById("ratio").value = Math.floor(Math.random() * 10000000);

  // Draw on canvas 
  drawOnCanvas();
});
