import { Spirograph } from "./spiro";

export const canvasEl = document.getElementById("canvas");
export const ctx = canvasEl.getContext("2d");
export const clearCanvas = () => {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
};

const windowDimensions = { "height": window.innerHeight, "width": window.innerWidth };
const numRotorsEl = document.getElementById("num-rotors");

// Set Up Canvas 
document.addEventListener("DOMContentLoaded", () => {
  canvasEl.setAttribute("width", (windowDimensions.width) - 300);
  canvasEl.setAttribute("height", windowDimensions.height);
});

// Function to draw on canvas

export const drawOnCanvas = (animate = false) => {
  clearCanvas();

  let radii = [];
  let ratio = [];
  for (let i = 1; i <= parseInt(numRotorsEl.value); i++) {
    radii.push(parseInt(document.getElementById(`radius${i}`).value));
    ratio.push(parseInt(document.getElementById(`ratio${i}`).value));
  }

  let spiro = new Spirograph({
    radii: radii,
    ratio: ratio
  });

  if (animate === true) {
    spiro.thetaLimit = 0;
    spiro.animateSpirograph();
  } else {
    spiro.thetaLimit = 2 * Math.PI;
    window.stopAnimation = false;
    spiro.drawSpirograph();
  }
};

const stopAnimation = () => {
  if (window.animationFrameId) {
    window.cancelAnimationFrame(window.animationFrameId);
  }
  window.stopAnimation = true;
};

// Randomize Button listeners 

const randomize = ({minRotor, maxRotor, maxRatio}) => {
  // Fill out form element with randomized values 
  numRotorsEl.value = Math.floor(Math.random() * (maxRotor - minRotor + 1)) + minRotor;
  numRotorsEl.dispatchEvent(new Event("input"));
  let numRadii = parseInt(numRotorsEl.value);

  for (let i = 1; i <= numRadii; i++) {
    document.getElementById(`radius${i}`).value = Math.floor(Math.random() * canvasEl.height / (2 * numRadii) + 10);
    document.getElementById(`ratio${i}`).value = Math.floor(Math.random() * maxRatio) + 1;
  }

  // Draw on canvas 
  if (document.getElementById("draw-mode-radio").checked) {
    drawOnCanvas();
  } else {
    window.stopAnimation = false;
    drawOnCanvas(true);
  }
};

let randomSimple = document.getElementById("randomize-simple-button");
let randomSpiral = document.getElementById("randomize-spirals-button");
let randomComplex = document.getElementById("randomize-complex-button");

randomSimple.addEventListener("click", () => {
  stopAnimation();
  clearCanvas();
  randomize({minRotor: 2, maxRotor: 5, maxRatio: 6});
});

randomSpiral.addEventListener("click", () => {  
  stopAnimation();
  clearCanvas();
  randomize({minRotor: 2, maxRotor: 2, maxRatio: 100000000});
});

randomComplex.addEventListener("click", () => {  
  stopAnimation();
  clearCanvas();
  randomize({ minRotor: 4, maxRotor: 9, maxRatio: 100000000});
});

// Options -- Dynamically Create HTML Elements 

numRotorsEl.addEventListener("input", () => {
  let numRotors = parseInt(numRotorsEl.value) || 0;
  let radiiSection = document.getElementById("radii-section");
  let ratioSection = document.getElementById("ratio-section");
  let numRadiiInput = radiiSection.childElementCount - 1;
  let numRatioInput = ratioSection.childElementCount - 1;

  while (numRadiiInput !== numRotors) {
    if (radiiSection.childElementCount > numRotors) {
      radiiSection.removeChild(radiiSection.lastChild);
      ratioSection.removeChild(ratioSection.lastChild);
      numRadiiInput -= 1;
      numRatioInput -= 1;
    } else {
      let radiusLabel = document.createElement('label');
      let labelText = document.createElement('span');
      let radiusInput = document.createElement('input');

      labelText.innerHTML = `rd${numRadiiInput + 1} `;
      radiusInput.type = "number";
      radiusInput.classList.add("radius-input");
      radiusInput.id = `radius${numRadiiInput + 1}`;
      radiusLabel.appendChild(labelText);
      radiusLabel.appendChild(radiusInput);
      radiiSection.appendChild(radiusLabel);
      numRadiiInput += 1;

      let ratioLabel = document.createElement('label');
      let ratioText = document.createElement('span');
      let ratioInput = document.createElement('input');

      ratioText.innerHTML = `rt${numRatioInput + 1} `;
      ratioInput.type = "number";
      ratioInput.classList.add("ratio-input");
      ratioInput.id = `ratio${numRatioInput + 1}`;
      ratioLabel.appendChild(ratioText);
      ratioLabel.appendChild(ratioInput);
      ratioSection.appendChild(ratioLabel);
      numRatioInput += 1;
    }
  }
});

document.getElementById("draw-mode-radio").addEventListener("click", () => {
  document.getElementById("animation-section").classList.toggle("hide");
  document.getElementById("draw-section").classList.toggle("hide");
});

document.getElementById("animation-mode-radio").addEventListener("click", () => {
  document.getElementById("animation-section").classList.toggle("hide");
  document.getElementById("draw-section").classList.toggle("hide");
});

document.getElementById("show-adv-options").addEventListener("click", () => {
  document.getElementById("show-adv-options").classList.toggle("hide");
  document.getElementById("hide-adv-options").classList.toggle("hide");
  document.getElementById("advanced-options-section").classList.toggle("hide");
});

document.getElementById("hide-adv-options").addEventListener("click", () => {
  document.getElementById("show-adv-options").classList.toggle("hide");
  document.getElementById("hide-adv-options").classList.toggle("hide");
  document.getElementById("advanced-options-section").classList.toggle("hide");
});


// Animation Button listeners 
document.getElementById("animation-play-button").addEventListener("click", () => {
  window.stopAnimation = false;
  drawOnCanvas(true);
});

document.getElementById("animation-clear-button")
  .addEventListener("click", () => {
    stopAnimation();
    clearCanvas();
  }
);

document.getElementById("animation-pause-button")
  .addEventListener("click", () => {
    stopAnimation();
  }
);

// Draw Button listener 
document.getElementById("draw-button").addEventListener("click", () => {
  drawOnCanvas();
});

document.getElementById("draw-clear-button")
  .addEventListener("click", () => {
    stopAnimation();
    clearCanvas();
  }
);
