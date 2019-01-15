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
  canvasEl.setAttribute("width", windowDimensions.width * window.devicePixelRatio);
  canvasEl.setAttribute("height", windowDimensions.height * window.devicePixelRatio);
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
    console.log("animate");
    spiro.thetaLimit = 0;
    spiro.animateSpirograph();
  } else {
    spiro.thetaLimit = 2 * Math.PI;
    window.stopAnimation = false;
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
    document.getElementById(`ratio${i}`).value = Math.floor(Math.random() * 10);
  }
  
  // Draw on canvas 
  drawOnCanvas();
});


// Options Display Toggle 

const optionsButton = document.getElementById("options-button");
const optionsPane = document.getElementById("options-pane");

optionsButton.addEventListener("click", () => {
  optionsPane.classList.toggle("show");
});

// Options -- Dynamically Create HTML Elements 

numRotorsEl.addEventListener("input", () => {
  let numRotors = parseInt(numRotorsEl.value) || 0;
  let radiiSection = document.getElementById("radii-section");
  let ratioSection = document.getElementById("ratio-section");
  let numRadiiInput = radiiSection.childElementCount;
  let numRatioInput = ratioSection.childElementCount;

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

      labelText.innerHTML = `radius${numRadiiInput + 1}`;
      radiusInput.type = "number";
      radiusInput.id = `radius${numRadiiInput + 1}`;
      radiusLabel.appendChild(labelText);
      radiusLabel.appendChild(radiusInput);
      radiiSection.appendChild(radiusLabel);
      numRadiiInput += 1;

      // <label>
      //   text<input id="text" />
      // </label>

      let ratioLabel = document.createElement('label');
      let ratioText = document.createElement('span');
      let ratioInput = document.createElement('input');

      ratioText.innerHTML = `ratio${numRatioInput + 1}`;
      ratioInput.type = "number";
      ratioInput.id = `ratio${numRatioInput + 1}`;
      ratioLabel.appendChild(ratioText);
      ratioLabel.appendChild(ratioInput);
      ratioSection.appendChild(ratioLabel);
      numRatioInput += 1;
    }
  }
});

// Clear Button listener 
document.getElementById("clear-button")
  .addEventListener("click", () => {
    // Stop animation 
    if (animationFrameId) {
      window.cancelAnimationFrame(window.animationFrameId);
    }
    window.stopAnimation = true;

    // Clear canvas
    // clearCanvas();
  }
);

// Draw Button listener 
document.getElementById("draw-button").addEventListener("click", () => {
  drawOnCanvas();
});

// Animate Button Listener 
document.getElementById("animate-button").addEventListener("click", () => {
  window.stopAnimation = false;
  drawOnCanvas(true);
});
