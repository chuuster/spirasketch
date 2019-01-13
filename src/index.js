import { Spirograph } from "./point";

const windowDimensions = { "height": window.innerHeight, "width": window.innerWidth };
const canvasEl = document.getElementById("canvas");
const ctx = canvasEl.getContext("2d");

export function clearCanvas() {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
}

const numRotorsEl = document.getElementById("num-rotors");

// Set Up Canvas 
document.addEventListener("DOMContentLoaded", () => {
  canvasEl.setAttribute("width", windowDimensions.width * window.devicePixelRatio);
  canvasEl.setAttribute("height", windowDimensions.height * window.devicePixelRatio);
});


// Randomize spirograph on click 
canvasEl.addEventListener("click", () => {
  let numRadii = numRotorsEl.value;
  let radii = [];

  for(let i = 0; i < numRadii; i++) {
    radii.push(Math.floor(Math.random() * canvasEl.height / (2*numRadii + 1)) + 20);
  }

  let spiro = new Spirograph({
    ctx: ctx,
    cx: (canvasEl.width / 2),
    cy: (canvasEl.height / 2),
    radii: radii,
    ratio1: Math.floor(Math.random() * 10000000000),
    ratio2: Math.floor(Math.random() * 10000000000),
    thetaLimit: 2 * Math.PI
  });

  console.log(spiro);
  clearCanvas();
  spiro.drawSpirograph();
  document.getElementById("num-rotors").value = "4";
  numRotorsEl.dispatchEvent(new Event("input"));


  for(let i = 1; i <= numRadii; i++) {
    document.getElementById(`radius${i}`).value = spiro.radii[i-1];
  }

  document.getElementById("ratio1").value = spiro.ratio1;
  document.getElementById("ratio2").value = spiro.ratio2;
});


// Options Display Toggle 

const optionsButton = document.getElementById("options-button");
const optionsPane = document.getElementById("options-pane");

optionsButton.addEventListener("click", () => {
  optionsPane.classList.toggle("show");
});

// Options Display Radii 

numRotorsEl.addEventListener("input", () => {
  let radiiSection = document.getElementById("radii-section");
  let numRotors = parseInt(numRotorsEl.value);

  while (radiiSection.hasChildNodes()) {
    radiiSection.removeChild(radiiSection.lastChild);
  }

  for(let i = 1; i <= numRotors; i++) {
    let radiusLabel = document.createElement('label');
    let labelText = document.createTextNode(`radius${i}`);
    let radiusInput = document.createElement('input');
    radiusInput.type = "number";
    radiusInput.id = `radius${i}`;
    radiusLabel.appendChild(labelText);
    radiusLabel.appendChild(radiusInput);
    radiiSection.appendChild(radiusLabel);
  }
});