// import { clearCanvas, canvasEl, drawOnCanvas } from "./index";

// // Options Display Toggle 

// const optionsButton = document.getElementById("options-button");
// const optionsPane = document.getElementById("options-pane");

// optionsButton.addEventListener("click", () => {
//   optionsPane.classList.toggle("show");
// });

// // Options Display Radii 
// export const numRotorsEl = document.getElementById("num-rotors");

// numRotorsEl.addEventListener("input", () => {
//   let numRotors = parseInt(numRotorsEl.value);
//   let radiiSection = document.getElementById("radii-section");
//   let numRadiiInput = radiiSection.childElementCount;

//   while (numRadiiInput !== numRotors) {
//     if (radiiSection.childElementCount > numRotors) {
//       radiiSection.removeChild(radiiSection.lastChild);
      
//       for(let i = 0; i < radiiSection.childElementCount; i++) {
//         radiiSection.children[i].children[0].max = `${canvasEl.height / (2 * numRotors + 1)}`;
//       }
      
//       numRadiiInput -= 1;
    
//     } else {
//       let radiusLabel = document.createElement('label');
//       let labelText = document.createTextNode(`radius${numRadiiInput + 1}`);
//       let radiusInput = document.createElement('input');
//       radiusInput.type = "range";
//       radiusInput.min = "10";
//       radiusInput.max = `${canvasEl.height / (2 * numRotors + 1)}`;
//       radiusInput.id = `radius${numRadiiInput + 1}`;
//       radiusLabel.appendChild(labelText);
//       radiusLabel.appendChild(radiusInput);
//       radiiSection.appendChild(radiusLabel);
//       numRadiiInput += 1;
      
//       for (let i = 0; i < radiiSection.childElementCount; i++) {
//         radiiSection.children[i].children[0].max = `${canvasEl.height / (2 * numRotors + 1)}`;
//       }
//     }
//   }
// });

// // Clear Button listener 
// document.getElementById("clear-button")
//   .addEventListener("click", () => {
//     // Stop animation 
//     // window.stopAnimation = true;
//     // window.cancelAnimationFrame(window.animationFrameId);

//     // Clear canvas
//     clearCanvas();
//   }
// );

// // Draw Button listener 
// document.getElementById("draw-button").addEventListener("click", () => {
//   drawOnCanvas();
// });

// // Animate Button Listener 
// document.getElementById("animate-button").addEventListener("click", () => {
//   drawOnCanvas(true);
// });
