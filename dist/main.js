/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: canvasEl, ctx, clearCanvas, drawOnCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasEl", function() { return canvasEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctx", function() { return ctx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCanvas", function() { return clearCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawOnCanvas", function() { return drawOnCanvas; });
/* harmony import */ var _spiro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spiro */ "./src/spiro.js");

var canvasEl = document.getElementById("canvas");
var ctx = canvasEl.getContext("2d");
var clearCanvas = function clearCanvas() {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
};
var windowDimensions = {
  "height": window.innerHeight,
  "width": window.innerWidth
};
var numRotorsEl = document.getElementById("num-rotors"); // Set Up Canvas 

document.addEventListener("DOMContentLoaded", function () {
  canvasEl.setAttribute("width", windowDimensions.width - 300);
  canvasEl.setAttribute("height", windowDimensions.height);
  randomize({
    minRotor: 2,
    maxRotor: 4,
    maxRatio: 6
  });
}); // Modal Close 

var modal = document.getElementById("instruction-modal");
modal.addEventListener("click", function () {
  modal.classList.add("hide");
}); // Function to draw on canvas

var drawOnCanvas = function drawOnCanvas() {
  var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  clearCanvas();
  var radii = [];
  var ratio = [];

  for (var i = 1; i <= parseInt(numRotorsEl.value); i++) {
    radii.push(parseInt(document.getElementById("radius".concat(i)).value));
    ratio.push(parseInt(document.getElementById("ratio".concat(i)).value));
  }

  var spiro = new _spiro__WEBPACK_IMPORTED_MODULE_0__["Spirograph"]({
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

var stopAnimation = function stopAnimation() {
  if (window.animationFrameId) {
    window.cancelAnimationFrame(window.animationFrameId);
  }

  window.stopAnimation = true;
}; // Randomize Button listeners 


var randomize = function randomize(_ref) {
  var minRotor = _ref.minRotor,
      maxRotor = _ref.maxRotor,
      maxRatio = _ref.maxRatio;
  // Fill out form element with randomized values 
  numRotorsEl.value = Math.floor(Math.random() * (maxRotor - minRotor + 1)) + minRotor;
  numRotorsEl.dispatchEvent(new Event("input"));
  var numRadii = parseInt(numRotorsEl.value);

  for (var i = 1; i <= numRadii; i++) {
    document.getElementById("radius".concat(i)).value = Math.floor(Math.random() * canvasEl.height / (2 * numRadii) + 10);
    document.getElementById("ratio".concat(i)).value = Math.floor(Math.random() * maxRatio) + 1;
  } // Draw on canvas 


  if (!document.getElementById("animation-mode-radio").checked) {
    drawOnCanvas();
  } else {
    window.stopAnimation = false;
    drawOnCanvas(true);
  }
};

var randomSimple = document.getElementById("randomize-simple-button");
var randomSpiral = document.getElementById("randomize-spirals-button");
var randomComplex = document.getElementById("randomize-complex-button");
randomSimple.addEventListener("click", function () {
  stopAnimation();
  clearCanvas();
  randomize({
    minRotor: 2,
    maxRotor: 5,
    maxRatio: 6
  });
});
randomSpiral.addEventListener("click", function () {
  stopAnimation();
  clearCanvas();
  randomize({
    minRotor: 2,
    maxRotor: 2,
    maxRatio: 100000000
  });
});
randomComplex.addEventListener("click", function () {
  stopAnimation();
  clearCanvas();
  randomize({
    minRotor: 4,
    maxRotor: 9,
    maxRatio: 100000000
  });
}); // Options -- Dynamically Create HTML Elements 

numRotorsEl.addEventListener("input", function () {
  var numRotors = parseInt(numRotorsEl.value) || 0;
  var radiiSection = document.getElementById("radii-section");
  var ratioSection = document.getElementById("ratio-section");
  var numRadiiInput = radiiSection.childElementCount - 1;
  var numRatioInput = ratioSection.childElementCount - 1;

  while (numRadiiInput !== numRotors) {
    if (radiiSection.childElementCount > numRotors) {
      radiiSection.removeChild(radiiSection.lastChild);
      ratioSection.removeChild(ratioSection.lastChild);
      numRadiiInput -= 1;
      numRatioInput -= 1;
    } else {
      var radiusLabel = document.createElement('label');
      var labelText = document.createElement('span');
      var radiusInput = document.createElement('input');
      labelText.innerHTML = "rd".concat(numRadiiInput + 1);
      radiusInput.type = "number";
      radiusInput.classList.add("radius-input");
      radiusInput.id = "radius".concat(numRadiiInput + 1);
      radiusLabel.appendChild(labelText);
      radiusLabel.appendChild(radiusInput);
      radiiSection.appendChild(radiusLabel);
      numRadiiInput += 1;
      var ratioLabel = document.createElement('label');
      var ratioText = document.createElement('span');
      var ratioInput = document.createElement('input');
      ratioText.innerHTML = "rt".concat(numRatioInput + 1);
      ratioInput.type = "number";
      ratioInput.classList.add("ratio-input");
      ratioInput.id = "ratio".concat(numRatioInput + 1);
      ratioLabel.appendChild(ratioText);
      ratioLabel.appendChild(ratioInput);
      ratioSection.appendChild(ratioLabel);
      numRatioInput += 1;
    }
  }
}); // Draw Button listener 

document.getElementById("draw-button").addEventListener("click", function () {
  if (!document.getElementById("animation-mode-radio").checked) {
    stopAnimation();
    clearCanvas();
    drawOnCanvas();
  } else {
    window.stopAnimation = false;
    drawOnCanvas(true);
  }
});
document.getElementById("draw-clear-button").addEventListener("click", function () {
  stopAnimation();
  clearCanvas();
});

/***/ }),

/***/ "./src/spinner.js":
/*!************************!*\
  !*** ./src/spinner.js ***!
  \************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Spinner =
/*#__PURE__*/
function () {
  function Spinner(start_x, start_y, radius, theta) {
    _classCallCheck(this, Spinner);

    this.start_x = start_x;
    this.start_y = start_y;
    this.end_x = start_x + radius * Math.cos(theta);
    this.end_y = start_y + radius * Math.sin(theta);
    this.radius = radius;
    this.theta = theta;
  }

  _createClass(Spinner, [{
    key: "drawSpinner",
    value: function drawSpinner() {
      _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
      _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].moveTo(this.start_x, this.start_y);
      _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineTo(this.end_x, this.end_y);
      _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "#FF0000";
      _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].stroke();
    }
  }]);

  return Spinner;
}();

/***/ }),

/***/ "./src/spiro.js":
/*!**********************!*\
  !*** ./src/spiro.js ***!
  \**********************/
/*! exports provided: Spirograph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spirograph", function() { return Spirograph; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner */ "./src/spinner.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Spirograph =
/*#__PURE__*/
function () {
  function Spirograph(_ref) {
    var radii = _ref.radii,
        ratio = _ref.ratio,
        thetaLimit = _ref.thetaLimit;

    _classCallCheck(this, Spirograph);

    this.cx = _index__WEBPACK_IMPORTED_MODULE_0__["canvasEl"].width / 2;
    this.cy = _index__WEBPACK_IMPORTED_MODULE_0__["canvasEl"].height / 2;
    this.radii = radii;
    this.ratio = ratio;
    this.thetaLimit = thetaLimit;
    this.animateSpirograph = this.animateSpirograph.bind(this);
  }

  _createClass(Spirograph, [{
    key: "sumRadii",
    value: function sumRadii() {
      var sum = 0;

      for (var i = 0; i < this.radii.length; i++) {
        sum += this.radii[i];
      }

      return sum;
    }
  }, {
    key: "xyOffset",
    value: function xyOffset(theta) {
      var xOffset = this.radii[0] * Math.cos(theta * this.ratio[0]);
      var yOffset = this.radii[0] * Math.sin(theta * this.ratio[0]);

      for (var i = 1; i < this.radii.length; i++) {
        xOffset += this.radii[i] * Math.cos(theta * this.ratio[i]);
        yOffset += this.radii[i] * Math.sin(theta * this.ratio[i]);
      }

      return [xOffset, yOffset];
    }
  }, {
    key: "createSpinners",
    value: function createSpinners() {
      var spinners = [];
      spinners.push(new _spinner__WEBPACK_IMPORTED_MODULE_1__["Spinner"](this.cx, this.cy, this.radii[0], this.thetaLimit * this.ratio[0]));

      for (var i = 1; i < this.radii.length; i++) {
        spinners.push(new _spinner__WEBPACK_IMPORTED_MODULE_1__["Spinner"](spinners[i - 1].end_x, spinners[i - 1].end_y, this.radii[i], this.thetaLimit * this.ratio[i]));
      }

      return spinners;
    }
  }, {
    key: "drawSpirograph",
    value: function drawSpirograph() {
      var x, y, theta;
      _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
      _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].moveTo(this.cx + this.sumRadii(), this.cy); // Draw segments from theta = 0 to thetaLimit

      for (theta = 0; theta <= this.thetaLimit; theta += Math.PI / 180) {
        var offset = this.xyOffset(theta);
        x = this.cx + offset[0];
        y = this.cy + offset[1];
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineTo(x, y);
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "rgba(0,0,0,0.5)";
      }

      _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].stroke();
    }
  }, {
    key: "animateSpirograph",
    value: function animateSpirograph() {
      if (!window.stopAnimation) {
        if (this.thetaLimit <= 2 * Math.PI) {
          Object(_index__WEBPACK_IMPORTED_MODULE_0__["clearCanvas"])();
          this.thetaLimit += Math.PI / 180;
          this.drawSpirograph();
          this.createSpinners().forEach(function (spinner) {
            spinner.drawSpinner();
          });
        }

        window.animationFrameId = window.requestAnimationFrame(this.animateSpirograph);
      }
    }
  }]);

  return Spirograph;
}(); // 0 => 100 
// 0.001 => 1 
// 1x 2x 3x 4x 5x 
// 0.005 0.01 0.05 0.10

/***/ })

/******/ });
//# sourceMappingURL=main.js.map