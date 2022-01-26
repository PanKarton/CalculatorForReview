/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./src/img/favicon-32x32.png */ "./src/img/favicon-32x32.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <!-- displays site properly based on user's device -->\n\n    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n\n    <title>Frontend Mentor | Calculator app</title>\n</head>\n\n<body>\n    <section data-calculator>\n        <div class=\"calculator\">\n            <div class=\"header\">\n                <h1 class=\"header__title\">calc</h1>\n                <div class=\"header__theme-switcher-wrapper\">\n                    <p class=\"header__theme-word\">theme</p>\n                    <div class=\"theme-switcher l-flex\">\n                        <ul class=\"theme-switcher__numbers\">\n                            <li>\n                                <button data-theme-number class=\"theme-switcher__number\">1</button>\n                            </li>\n                            <li>\n                                <button data-theme-number class=\"theme-switcher__number\">2</button>\n                            </li>\n                            <li>\n                                <button data-theme-number class=\"theme-switcher__number\">3</button>\n                            </li>\n                        </ul>\n                        <div data-switch-wrapper class=\"theme-switcher__switch-wrapper\">\n                            <label data-switcher class=\"theme-switcher__switch\">\n                                <input type=\"checkbox\">\n                                <span class=\"theme-switcher__slider\"></span>\n                            </label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"screen\">\n                <div class=\"screen__prev-operand-wrapper\">\n                    <p data-prev-operand class=\"screen__prev-operand\"></p>\n                </div>\n                <div class=\"screen__current-operand-wrapper\">\n                    <p data-current-operand class=\"screen__current-operand\"></p>\n                </div>\n            </div>\n            <div class=\"keypad\">\n                <button data-number class=\"key\">7</button>\n                <button data-number class=\"key\">8</button>\n                <button data-number class=\"key\">9</button>\n                <button data-delete class=\"key key--edit\">del</button>\n                <button data-number class=\"key\">4</button>\n                <button data-number class=\"key\">5</button>\n                <button data-number class=\"key\">6</button>\n                <button data-operation class=\"key\">+</button>\n                <button data-number class=\"key\">1</button>\n                <button data-number class=\"key\">2</button>\n                <button data-number class=\"key\">3</button>\n                <button data-operation class=\"key\">-</button>\n                <button data-number class=\"key\">.</button>\n                <button data-number class=\"key\">0</button>\n                <button data-operation class=\"key\">/</button>\n                <button data-operation class=\"key\">*</button>\n                <button data-reset class=\"key key--edit key--long\">reset</button>\n                <button data-equals class=\"key key--long key--result\">=</button>\n            </div>\n        </div>\n    </section>\n</body>\n\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/calculator.js":
/*!******************************!*\
  !*** ./src/js/calculator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calculator)
/* harmony export */ });
class Calculator {
    constructor(previousOperandDisplay, currentOperandDisplay) {
        this.previousOperandDisplay = previousOperandDisplay;
        this.currentOperandDisplay = currentOperandDisplay;
        this.clear();
        // update to display 0 
        this.updateDisplay();
    }
    clear = () => {
        this.previousValue = ``;
        this.currentValue = `0`;
        this.operation = undefined;
    }
    deleteLastChar = () => {
        // remove last char from string
        this.currentValue = this.currentValue.slice(0, -1);
    }
    appendChar = char => {
        // return if err is displayed
        if (this.currentValue === `err`) return;
        // return if its not first period(dot)
        if (char === `.` && this.currentValue.includes(`.`)) return;
        // keep first 0 only if char is period(dot)
        if (char !== `.`) this.currentValue === '0' ? this.currentValue = `` : ``;
        // add char to the end
        this.currentValue = this.currentValue.toString() + char.toString();
    }
    toggleButtonState = button => {
        button.classList.toggle(`active`);
    }
    addOperation = operation => {
        if (this.currentValue === `err`) return;
        // first time when previousValue is undefined, dont compute and just swap values
        if (this.previousValue) {
            this.compute();
        }
        this.operation = operation;
        this.previousValue = this.currentValue;
        this.currentValue = ``;

    }
    compute = () => {
        const computation = eval(`${this.previousValue}${this.operation}${this.currentValue}`);
        this.currentValue = computation.toString();
        if (this.currentValue === `Infinity`) {
            this.currentValue = `err`;
        }
    }
    updateDisplay = () => {
        // if last char is deleted, then display 0
        this.currentValue === `` ? this.currentValue = `0` : ``;
        // if operation is undefined, then concatenate empty string
        const operationSign = this.operation === undefined ? '' : this.operation;
        // update both displays
        this.previousOperandDisplay.textContent = this.previousValue + operationSign;
        this.currentOperandDisplay.textContent = this.currentValue;
    }
    showResult = () => {
        this.compute();
        this.previousValue = ``;
        this.operation = undefined;
    }
}

/***/ }),

/***/ "./src/js/theme-switcher.js":
/*!**********************************!*\
  !*** ./src/js/theme-switcher.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThemeSwitcher)
/* harmony export */ });
class ThemeSwitcher {
    constructor(calculator, switcher) {
        this.calculator = calculator;
        this.switcher = switcher;
    }
    getIndex = (number, array) => array.indexOf(number);
    // this function returns 0, 1 or 2 depending on which 1/3 part of stadium shaped element user clicks (left, middle, right)
    getIndexFromClickPosition = (event) => {
        event.preventDefault();
        const rect = event.currentTarget.getBoundingClientRect();
        const MouseX = event.clientX - rect.left;
        const thirdOfSwitcherLength = rect.width / 3;
        // this returns 0, 1 or 2
        return Math.floor(MouseX / thirdOfSwitcherLength);
    };
    getThemeName = (index) => {
        switch (index) {
            case 0:
                return `blue-theme`;
            case 1:
                return `light-theme`;
            case 2:
                return `purple-theme`;
        }
    };
    setThemeInStorage = (theme) => {
        window.localStorage.setItem(`theme`, theme);
    };
    changeTheme = (index) => {
        const newTheme = this.getThemeName(index);
        this.setThemeInStorage(newTheme);
        this.calculator.className = ``;
        this.calculator.classList.add(newTheme);
    };
    changeThemeFromStorage = (theme) => {
        // set theme if it's first visit on website
        if (window.localStorage.getItem(`theme`) === null) {
            window.localStorage.setItem(`theme`, theme);
        }
        const newTheme = window.localStorage.getItem("theme");
        this.calculator.classList.add(newTheme);
    };
}

/***/ }),

/***/ "./src/img/favicon-32x32.png":
/*!***********************************!*\
  !*** ./src/img/favicon-32x32.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "736eae1ff09acfe04c50.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _js_calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/calculator */ "./src/js/calculator.js");
/* harmony import */ var _js_theme_switcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/theme-switcher */ "./src/js/theme-switcher.js");


// js modules





// ---------------------------------------------
// ============== calculator ===================
// ---------------------------------------------


// displays
const previousOperand = document.querySelector(`[data-prev-operand]`);
const currentOperand = document.querySelector(`[data-current-operand]`);
// buttons
const resetBtn = document.querySelector(`[data-reset]`);
const equalsBtn = document.querySelector(`[data-equals]`);
const deleteBtn = document.querySelector(`[data-delete]`);
const numberBtns = [...document.querySelectorAll(`[data-number]`)];
const operationBtns = [...document.querySelectorAll(`[data-operation]`)];
const allButtons = [resetBtn, equalsBtn, deleteBtn, ...numberBtns, ...operationBtns];

const calculator = new _js_calculator__WEBPACK_IMPORTED_MODULE_2__["default"](previousOperand, currentOperand);

// push button effect
allButtons.forEach(button => {
    button.addEventListener(`mousedown`, event => {
        calculator.toggleButtonState(event.currentTarget);
    });
    button.addEventListener(`mouseup`, event => {
        calculator.toggleButtonState(event.currentTarget);
    });
});

// add char
numberBtns.forEach(number => {
    number.addEventListener(`click`, event => {
        calculator.appendChar(event.currentTarget.textContent);
        calculator.updateDisplay();
    })
});

// delete last char 
deleteBtn.addEventListener(`click`, () => {
    calculator.deleteLastChar();
    calculator.updateDisplay();
});

// delete all
resetBtn.addEventListener(`click`, () => {
    calculator.clear();
    calculator.updateDisplay();
});

//add operation
operationBtns.forEach(operation => {
    operation.addEventListener(`click`, event => {
        calculator.addOperation(event.currentTarget.textContent);
        calculator.updateDisplay();
    })
});
equalsBtn.addEventListener(`click`, () => {
    calculator.showResult();
    calculator.updateDisplay();
});


// ---------------------------------------------
// ============== calculator ===================
// ---------------------------------------------



const numbers = [...document.querySelectorAll(`[data-theme-number]`)];
const switcherWrapper = document.querySelector(`[data-switch-wrapper]`);
const calculatorModule = document.querySelector(`[data-calculator]`);
const switcher = document.querySelector(`[data-switcher]`);

const themeSwitcher = new _js_theme_switcher__WEBPACK_IMPORTED_MODULE_3__["default"](calculatorModule, switcher);



// set theme 
numbers.forEach(number => {
    number.addEventListener(`click`, () => {
        const index = themeSwitcher.getIndex(number, numbers);
        themeSwitcher.changeTheme(index);
    })
});

switcherWrapper.addEventListener(`click`, event => {
    const index = themeSwitcher.getIndexFromClickPosition(event);
    themeSwitcher.changeTheme(index);
});


// set theme right after page load
(() => {
    const actualTheme = window.localStorage.getItem(`theme`);
    if (actualTheme === `purple-theme`) {
        themeSwitcher.changeThemeFromStorage(`purple-theme`);
    } else if (actualTheme === `light-theme`) {
        themeSwitcher.changeThemeFromStorage(`light-theme`);
    } else {
        themeSwitcher.changeThemeFromStorage(`blue-theme`);
    }
})()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5RztBQUN6Ryx5Q0FBeUMsK0hBQThDO0FBQ3ZGO0FBQ0Esc0NBQXNDLHVGQUF3QztBQUM5RTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7OztBQ1BOOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxrQkFBa0I7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5RGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCMkI7QUFDSjtBQUN2QjtBQUN5QztBQUNPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNEQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMERBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLENBQUMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvLi9pbmRleC5odG1sIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz85OGFmIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvLi9zcmMvanMvY2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzLy4vc3JjL2pzL3RoZW1lLXN3aXRjaGVyLmpzIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc3JjL2ltZy9mYXZpY29uLTMyeDMyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG5cXG48aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxuICAgIDwhLS0gZGlzcGxheXMgc2l0ZSBwcm9wZXJseSBiYXNlZCBvbiB1c2VyJ3MgZGV2aWNlIC0tPlxcblxcbiAgICA8bGluayByZWw9XFxcImljb25cXFwiIHR5cGU9XFxcImltYWdlL3BuZ1xcXCIgc2l6ZXM9XFxcIjMyeDMyXFxcIiBocmVmPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+XFxuXFxuICAgIDx0aXRsZT5Gcm9udGVuZCBNZW50b3IgfCBDYWxjdWxhdG9yIGFwcDwvdGl0bGU+XFxuPC9oZWFkPlxcblxcbjxib2R5PlxcbiAgICA8c2VjdGlvbiBkYXRhLWNhbGN1bGF0b3I+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYWxjdWxhdG9yXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XFxcImhlYWRlcl9fdGl0bGVcXFwiPmNhbGM8L2gxPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJfX3RoZW1lLXN3aXRjaGVyLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImhlYWRlcl9fdGhlbWUtd29yZFxcXCI+dGhlbWU8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aGVtZS1zd2l0Y2hlciBsLWZsZXhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwidGhlbWUtc3dpdGNoZXJfX251bWJlcnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGhlbWUtbnVtYmVyIGNsYXNzPVxcXCJ0aGVtZS1zd2l0Y2hlcl9fbnVtYmVyXFxcIj4xPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS10aGVtZS1udW1iZXIgY2xhc3M9XFxcInRoZW1lLXN3aXRjaGVyX19udW1iZXJcXFwiPjI8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRoZW1lLW51bWJlciBjbGFzcz1cXFwidGhlbWUtc3dpdGNoZXJfX251bWJlclxcXCI+MzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXN3aXRjaC13cmFwcGVyIGNsYXNzPVxcXCJ0aGVtZS1zd2l0Y2hlcl9fc3dpdGNoLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1zd2l0Y2hlciBjbGFzcz1cXFwidGhlbWUtc3dpdGNoZXJfX3N3aXRjaFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRoZW1lLXN3aXRjaGVyX19zbGlkZXJcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzY3JlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzY3JlZW5fX3ByZXYtb3BlcmFuZC13cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtcHJldi1vcGVyYW5kIGNsYXNzPVxcXCJzY3JlZW5fX3ByZXYtb3BlcmFuZFxcXCI+PC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2NyZWVuX19jdXJyZW50LW9wZXJhbmQtd3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLWN1cnJlbnQtb3BlcmFuZCBjbGFzcz1cXFwic2NyZWVuX19jdXJyZW50LW9wZXJhbmRcXFwiPjwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwia2V5cGFkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW51bWJlciBjbGFzcz1cXFwia2V5XFxcIj43PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1udW1iZXIgY2xhc3M9XFxcImtleVxcXCI+ODwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtbnVtYmVyIGNsYXNzPVxcXCJrZXlcXFwiPjk8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWRlbGV0ZSBjbGFzcz1cXFwia2V5IGtleS0tZWRpdFxcXCI+ZGVsPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1udW1iZXIgY2xhc3M9XFxcImtleVxcXCI+NDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtbnVtYmVyIGNsYXNzPVxcXCJrZXlcXFwiPjU8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW51bWJlciBjbGFzcz1cXFwia2V5XFxcIj42PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1vcGVyYXRpb24gY2xhc3M9XFxcImtleVxcXCI+KzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtbnVtYmVyIGNsYXNzPVxcXCJrZXlcXFwiPjE8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW51bWJlciBjbGFzcz1cXFwia2V5XFxcIj4yPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1udW1iZXIgY2xhc3M9XFxcImtleVxcXCI+MzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtb3BlcmF0aW9uIGNsYXNzPVxcXCJrZXlcXFwiPi08L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW51bWJlciBjbGFzcz1cXFwia2V5XFxcIj4uPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1udW1iZXIgY2xhc3M9XFxcImtleVxcXCI+MDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtb3BlcmF0aW9uIGNsYXNzPVxcXCJrZXlcXFwiPi88L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZXJhdGlvbiBjbGFzcz1cXFwia2V5XFxcIj4qPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1yZXNldCBjbGFzcz1cXFwia2V5IGtleS0tZWRpdCBrZXktLWxvbmdcXFwiPnJlc2V0PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1lcXVhbHMgY2xhc3M9XFxcImtleSBrZXktLWxvbmcga2V5LS1yZXN1bHRcXFwiPj08L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuPC9ib2R5PlxcblxcbjwvaHRtbD5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY3VsYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwcmV2aW91c09wZXJhbmREaXNwbGF5LCBjdXJyZW50T3BlcmFuZERpc3BsYXkpIHtcclxuICAgICAgICB0aGlzLnByZXZpb3VzT3BlcmFuZERpc3BsYXkgPSBwcmV2aW91c09wZXJhbmREaXNwbGF5O1xyXG4gICAgICAgIHRoaXMuY3VycmVudE9wZXJhbmREaXNwbGF5ID0gY3VycmVudE9wZXJhbmREaXNwbGF5O1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICAvLyB1cGRhdGUgdG8gZGlzcGxheSAwIFxyXG4gICAgICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xyXG4gICAgfVxyXG4gICAgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gYGA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBgMGA7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBkZWxldGVMYXN0Q2hhciA9ICgpID0+IHtcclxuICAgICAgICAvLyByZW1vdmUgbGFzdCBjaGFyIGZyb20gc3RyaW5nXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLmN1cnJlbnRWYWx1ZS5zbGljZSgwLCAtMSk7XHJcbiAgICB9XHJcbiAgICBhcHBlbmRDaGFyID0gY2hhciA9PiB7XHJcbiAgICAgICAgLy8gcmV0dXJuIGlmIGVyciBpcyBkaXNwbGF5ZWRcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VmFsdWUgPT09IGBlcnJgKSByZXR1cm47XHJcbiAgICAgICAgLy8gcmV0dXJuIGlmIGl0cyBub3QgZmlyc3QgcGVyaW9kKGRvdClcclxuICAgICAgICBpZiAoY2hhciA9PT0gYC5gICYmIHRoaXMuY3VycmVudFZhbHVlLmluY2x1ZGVzKGAuYCkpIHJldHVybjtcclxuICAgICAgICAvLyBrZWVwIGZpcnN0IDAgb25seSBpZiBjaGFyIGlzIHBlcmlvZChkb3QpXHJcbiAgICAgICAgaWYgKGNoYXIgIT09IGAuYCkgdGhpcy5jdXJyZW50VmFsdWUgPT09ICcwJyA/IHRoaXMuY3VycmVudFZhbHVlID0gYGAgOiBgYDtcclxuICAgICAgICAvLyBhZGQgY2hhciB0byB0aGUgZW5kXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLmN1cnJlbnRWYWx1ZS50b1N0cmluZygpICsgY2hhci50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlQnV0dG9uU3RhdGUgPSBidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKGBhY3RpdmVgKTtcclxuICAgIH1cclxuICAgIGFkZE9wZXJhdGlvbiA9IG9wZXJhdGlvbiA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFZhbHVlID09PSBgZXJyYCkgcmV0dXJuO1xyXG4gICAgICAgIC8vIGZpcnN0IHRpbWUgd2hlbiBwcmV2aW91c1ZhbHVlIGlzIHVuZGVmaW5lZCwgZG9udCBjb21wdXRlIGFuZCBqdXN0IHN3YXAgdmFsdWVzXHJcbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXB1dGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcGVyYXRpb24gPSBvcGVyYXRpb247XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBgYDtcclxuXHJcbiAgICB9XHJcbiAgICBjb21wdXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXB1dGF0aW9uID0gZXZhbChgJHt0aGlzLnByZXZpb3VzVmFsdWV9JHt0aGlzLm9wZXJhdGlvbn0ke3RoaXMuY3VycmVudFZhbHVlfWApO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gY29tcHV0YXRpb24udG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VmFsdWUgPT09IGBJbmZpbml0eWApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBgZXJyYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVEaXNwbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmIGxhc3QgY2hhciBpcyBkZWxldGVkLCB0aGVuIGRpc3BsYXkgMFxyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID09PSBgYCA/IHRoaXMuY3VycmVudFZhbHVlID0gYDBgIDogYGA7XHJcbiAgICAgICAgLy8gaWYgb3BlcmF0aW9uIGlzIHVuZGVmaW5lZCwgdGhlbiBjb25jYXRlbmF0ZSBlbXB0eSBzdHJpbmdcclxuICAgICAgICBjb25zdCBvcGVyYXRpb25TaWduID0gdGhpcy5vcGVyYXRpb24gPT09IHVuZGVmaW5lZCA/ICcnIDogdGhpcy5vcGVyYXRpb247XHJcbiAgICAgICAgLy8gdXBkYXRlIGJvdGggZGlzcGxheXNcclxuICAgICAgICB0aGlzLnByZXZpb3VzT3BlcmFuZERpc3BsYXkudGV4dENvbnRlbnQgPSB0aGlzLnByZXZpb3VzVmFsdWUgKyBvcGVyYXRpb25TaWduO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE9wZXJhbmREaXNwbGF5LnRleHRDb250ZW50ID0gdGhpcy5jdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcbiAgICBzaG93UmVzdWx0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZSgpO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IGBgO1xyXG4gICAgICAgIHRoaXMub3BlcmF0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlbWVTd2l0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYWxjdWxhdG9yLCBzd2l0Y2hlcikge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRvciA9IGNhbGN1bGF0b3I7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hlciA9IHN3aXRjaGVyO1xyXG4gICAgfVxyXG4gICAgZ2V0SW5kZXggPSAobnVtYmVyLCBhcnJheSkgPT4gYXJyYXkuaW5kZXhPZihudW1iZXIpO1xyXG4gICAgLy8gdGhpcyBmdW5jdGlvbiByZXR1cm5zIDAsIDEgb3IgMiBkZXBlbmRpbmcgb24gd2hpY2ggMS8zIHBhcnQgb2Ygc3RhZGl1bSBzaGFwZWQgZWxlbWVudCB1c2VyIGNsaWNrcyAobGVmdCwgbWlkZGxlLCByaWdodClcclxuICAgIGdldEluZGV4RnJvbUNsaWNrUG9zaXRpb24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IE1vdXNlWCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgY29uc3QgdGhpcmRPZlN3aXRjaGVyTGVuZ3RoID0gcmVjdC53aWR0aCAvIDM7XHJcbiAgICAgICAgLy8gdGhpcyByZXR1cm5zIDAsIDEgb3IgMlxyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1vdXNlWCAvIHRoaXJkT2ZTd2l0Y2hlckxlbmd0aCk7XHJcbiAgICB9O1xyXG4gICAgZ2V0VGhlbWVOYW1lID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYGJsdWUtdGhlbWVgO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYGxpZ2h0LXRoZW1lYDtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBwdXJwbGUtdGhlbWVgO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBzZXRUaGVtZUluU3RvcmFnZSA9ICh0aGVtZSkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGhlbWVgLCB0aGVtZSk7XHJcbiAgICB9O1xyXG4gICAgY2hhbmdlVGhlbWUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdUaGVtZSA9IHRoaXMuZ2V0VGhlbWVOYW1lKGluZGV4KTtcclxuICAgICAgICB0aGlzLnNldFRoZW1lSW5TdG9yYWdlKG5ld1RoZW1lKTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0b3IuY2xhc3NOYW1lID0gYGA7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdG9yLmNsYXNzTGlzdC5hZGQobmV3VGhlbWUpO1xyXG4gICAgfTtcclxuICAgIGNoYW5nZVRoZW1lRnJvbVN0b3JhZ2UgPSAodGhlbWUpID0+IHtcclxuICAgICAgICAvLyBzZXQgdGhlbWUgaWYgaXQncyBmaXJzdCB2aXNpdCBvbiB3ZWJzaXRlXHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdGhlbWVgKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRoZW1lYCwgdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdUaGVtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRvci5jbGFzc0xpc3QuYWRkKG5ld1RoZW1lKTtcclxuICAgIH07XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zY3NzL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgJy4uL2luZGV4Lmh0bWwnO1xyXG4vLyBqcyBtb2R1bGVzXHJcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vanMvY2FsY3VsYXRvcic7XHJcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJy4vanMvdGhlbWUtc3dpdGNoZXInO1xyXG5cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPT09PT09PT09PT09PT0gY2FsY3VsYXRvciA9PT09PT09PT09PT09PT09PT09XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8vIGRpc3BsYXlzXHJcbmNvbnN0IHByZXZpb3VzT3BlcmFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByZXYtb3BlcmFuZF1gKTtcclxuY29uc3QgY3VycmVudE9wZXJhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jdXJyZW50LW9wZXJhbmRdYCk7XHJcbi8vIGJ1dHRvbnNcclxuY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yZXNldF1gKTtcclxuY29uc3QgZXF1YWxzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZXF1YWxzXWApO1xyXG5jb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1kZWxldGVdYCk7XHJcbmNvbnN0IG51bWJlckJ0bnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtbnVtYmVyXWApXTtcclxuY29uc3Qgb3BlcmF0aW9uQnRucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1vcGVyYXRpb25dYCldO1xyXG5jb25zdCBhbGxCdXR0b25zID0gW3Jlc2V0QnRuLCBlcXVhbHNCdG4sIGRlbGV0ZUJ0biwgLi4ubnVtYmVyQnRucywgLi4ub3BlcmF0aW9uQnRuc107XHJcblxyXG5jb25zdCBjYWxjdWxhdG9yID0gbmV3IENhbGN1bGF0b3IocHJldmlvdXNPcGVyYW5kLCBjdXJyZW50T3BlcmFuZCk7XHJcblxyXG4vLyBwdXNoIGJ1dHRvbiBlZmZlY3RcclxuYWxsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihgbW91c2Vkb3duYCwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNhbGN1bGF0b3IudG9nZ2xlQnV0dG9uU3RhdGUoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9KTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKGBtb3VzZXVwYCwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNhbGN1bGF0b3IudG9nZ2xlQnV0dG9uU3RhdGUoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vLyBhZGQgY2hhclxyXG5udW1iZXJCdG5zLmZvckVhY2gobnVtYmVyID0+IHtcclxuICAgIG51bWJlci5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGV2ZW50ID0+IHtcclxuICAgICAgICBjYWxjdWxhdG9yLmFwcGVuZENoYXIoZXZlbnQuY3VycmVudFRhcmdldC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY2FsY3VsYXRvci51cGRhdGVEaXNwbGF5KCk7XHJcbiAgICB9KVxyXG59KTtcclxuXHJcbi8vIGRlbGV0ZSBsYXN0IGNoYXIgXHJcbmRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpID0+IHtcclxuICAgIGNhbGN1bGF0b3IuZGVsZXRlTGFzdENoYXIoKTtcclxuICAgIGNhbGN1bGF0b3IudXBkYXRlRGlzcGxheSgpO1xyXG59KTtcclxuXHJcbi8vIGRlbGV0ZSBhbGxcclxucmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XHJcbiAgICBjYWxjdWxhdG9yLmNsZWFyKCk7XHJcbiAgICBjYWxjdWxhdG9yLnVwZGF0ZURpc3BsYXkoKTtcclxufSk7XHJcblxyXG4vL2FkZCBvcGVyYXRpb25cclxub3BlcmF0aW9uQnRucy5mb3JFYWNoKG9wZXJhdGlvbiA9PiB7XHJcbiAgICBvcGVyYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBldmVudCA9PiB7XHJcbiAgICAgICAgY2FsY3VsYXRvci5hZGRPcGVyYXRpb24oZXZlbnQuY3VycmVudFRhcmdldC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY2FsY3VsYXRvci51cGRhdGVEaXNwbGF5KCk7XHJcbiAgICB9KVxyXG59KTtcclxuZXF1YWxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xyXG4gICAgY2FsY3VsYXRvci5zaG93UmVzdWx0KCk7XHJcbiAgICBjYWxjdWxhdG9yLnVwZGF0ZURpc3BsYXkoKTtcclxufSk7XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vID09PT09PT09PT09PT09IGNhbGN1bGF0b3IgPT09PT09PT09PT09PT09PT09PVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuY29uc3QgbnVtYmVycyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS10aGVtZS1udW1iZXJdYCldO1xyXG5jb25zdCBzd2l0Y2hlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zd2l0Y2gtd3JhcHBlcl1gKTtcclxuY29uc3QgY2FsY3VsYXRvck1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNhbGN1bGF0b3JdYCk7XHJcbmNvbnN0IHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtc3dpdGNoZXJdYCk7XHJcblxyXG5jb25zdCB0aGVtZVN3aXRjaGVyID0gbmV3IFRoZW1lU3dpdGNoZXIoY2FsY3VsYXRvck1vZHVsZSwgc3dpdGNoZXIpO1xyXG5cclxuXHJcblxyXG4vLyBzZXQgdGhlbWUgXHJcbm51bWJlcnMuZm9yRWFjaChudW1iZXIgPT4ge1xyXG4gICAgbnVtYmVyLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhlbWVTd2l0Y2hlci5nZXRJbmRleChudW1iZXIsIG51bWJlcnMpO1xyXG4gICAgICAgIHRoZW1lU3dpdGNoZXIuY2hhbmdlVGhlbWUoaW5kZXgpO1xyXG4gICAgfSlcclxufSk7XHJcblxyXG5zd2l0Y2hlcldyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBldmVudCA9PiB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoZW1lU3dpdGNoZXIuZ2V0SW5kZXhGcm9tQ2xpY2tQb3NpdGlvbihldmVudCk7XHJcbiAgICB0aGVtZVN3aXRjaGVyLmNoYW5nZVRoZW1lKGluZGV4KTtcclxufSk7XHJcblxyXG5cclxuLy8gc2V0IHRoZW1lIHJpZ2h0IGFmdGVyIHBhZ2UgbG9hZFxyXG4oKCkgPT4ge1xyXG4gICAgY29uc3QgYWN0dWFsVGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRoZW1lYCk7XHJcbiAgICBpZiAoYWN0dWFsVGhlbWUgPT09IGBwdXJwbGUtdGhlbWVgKSB7XHJcbiAgICAgICAgdGhlbWVTd2l0Y2hlci5jaGFuZ2VUaGVtZUZyb21TdG9yYWdlKGBwdXJwbGUtdGhlbWVgKTtcclxuICAgIH0gZWxzZSBpZiAoYWN0dWFsVGhlbWUgPT09IGBsaWdodC10aGVtZWApIHtcclxuICAgICAgICB0aGVtZVN3aXRjaGVyLmNoYW5nZVRoZW1lRnJvbVN0b3JhZ2UoYGxpZ2h0LXRoZW1lYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoZW1lU3dpdGNoZXIuY2hhbmdlVGhlbWVGcm9tU3RvcmFnZShgYmx1ZS10aGVtZWApO1xyXG4gICAgfVxyXG59KSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9