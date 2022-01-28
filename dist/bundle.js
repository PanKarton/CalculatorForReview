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
        if (this.currentOperandDisplay.textContent == `err`) return;
        this.currentValue = this.currentValue.slice(0, -1);
    }
    appendChar = char => {
        // return if err is displayed
        if (this.currentOperandDisplay.textContent == `err`) return;
        // return if its not first period(dot)
        if (char === `.` && this.currentValue.includes(`.`)) return;
        // keep first 0 only if char is period(dot)
        if (char !== `.`) this.currentValue === '0' ? this.currentValue = `` : ``;
        // char limit to 9
        if (this.currentValue.length >= 10) return;
        // add char to the end 
        this.currentValue = this.currentValue.toString() + char.toString();
    }
    toggleButtonState = button => {
        button.classList.toggle(`active`);
    }
    addOperation = operation => {
        if (this.currentOperandDisplay.textContent === `err`) return;
        if (this.currentOperandDisplay.textContent === `-`) return;
        // first clicked minus adds - as first char and makes number negative in eval()
        if (this.currentValue === `0`) {
            return operation === `-` ? this.currentValue = operation : ``;

        }
        // change to 0 if user inserts sth like 0.0000 or 0.
        eval(`${this.currentValue}*1`) === 0 ? this.currentValue = `0` : ``;
        // first time when previousValue is undefined, dont compute and just swap values
        if (this.previousValue) {
            this.compute();
        }
        this.operation = operation;
        this.previousValue = this.currentValue;
        this.currentValue = ``;

    }
    compute = () => {
        // compute stuff
        let computation = eval(`${this.previousValue} ${this.operation} ${this.currentValue}`);
        // delete last, unnecessary zeros after period
        computation = parseFloat(computation.toFixed(8));
        this.currentValue = computation.toString();
        // if current value is one of those three, then send error
        if ([`Infinity`, `-Infinity`, `NaN`].indexOf(this.currentValue) > -1) {
            this.currentValue = `err`;
        }
    }
    updateDisplay = () => {
        // if last char is deleted, then display 0
        this.currentValue === `` ? this.currentValue = `0` : ``;
        // if operation is undefined, then concat empty string
        const operationSign = this.operation === undefined ? '' : this.operation;
        // update both displays
        this.previousOperandDisplay.textContent = this.previousValue + operationSign;
        this.currentOperandDisplay.textContent = this.currentValue;
    }
    showResult = () => {
        // if (this.opeartion === undefined) return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBEQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxDQUFDLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzLy4vaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/OThhZiIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzLy4vc3JjL2pzL2NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy8uL3NyYy9qcy90aGVtZS1zd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3NyYy9pbWcvZmF2aWNvbi0zMngzMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuXFxuPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcbiAgICA8IS0tIGRpc3BsYXlzIHNpdGUgcHJvcGVybHkgYmFzZWQgb24gdXNlcidzIGRldmljZSAtLT5cXG5cXG4gICAgPGxpbmsgcmVsPVxcXCJpY29uXFxcIiB0eXBlPVxcXCJpbWFnZS9wbmdcXFwiIHNpemVzPVxcXCIzMngzMlxcXCIgaHJlZj1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiPlxcblxcbiAgICA8dGl0bGU+RnJvbnRlbmQgTWVudG9yIHwgQ2FsY3VsYXRvciBhcHA8L3RpdGxlPlxcbjwvaGVhZD5cXG5cXG48Ym9keT5cXG4gICAgPHNlY3Rpb24gZGF0YS1jYWxjdWxhdG9yPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FsY3VsYXRvclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJoZWFkZXJfX3RpdGxlXFxcIj5jYWxjPC9oMT5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyX190aGVtZS1zd2l0Y2hlci13cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJoZWFkZXJfX3RoZW1lLXdvcmRcXFwiPnRoZW1lPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGhlbWUtc3dpdGNoZXIgbC1mbGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInRoZW1lLXN3aXRjaGVyX19udW1iZXJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRoZW1lLW51bWJlciBjbGFzcz1cXFwidGhlbWUtc3dpdGNoZXJfX251bWJlclxcXCI+MTwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGhlbWUtbnVtYmVyIGNsYXNzPVxcXCJ0aGVtZS1zd2l0Y2hlcl9fbnVtYmVyXFxcIj4yPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS10aGVtZS1udW1iZXIgY2xhc3M9XFxcInRoZW1lLXN3aXRjaGVyX19udW1iZXJcXFwiPjM8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zd2l0Y2gtd3JhcHBlciBjbGFzcz1cXFwidGhlbWUtc3dpdGNoZXJfX3N3aXRjaC13cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGRhdGEtc3dpdGNoZXIgY2xhc3M9XFxcInRoZW1lLXN3aXRjaGVyX19zd2l0Y2hcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0aGVtZS1zd2l0Y2hlcl9fc2xpZGVyXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2NyZWVuXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2NyZWVuX19wcmV2LW9wZXJhbmQtd3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXByZXYtb3BlcmFuZCBjbGFzcz1cXFwic2NyZWVuX19wcmV2LW9wZXJhbmRcXFwiPjwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNjcmVlbl9fY3VycmVudC1vcGVyYW5kLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1jdXJyZW50LW9wZXJhbmQgY2xhc3M9XFxcInNjcmVlbl9fY3VycmVudC1vcGVyYW5kXFxcIj48L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImtleXBhZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1udW1iZXIgY2xhc3M9XFxcImtleVxcXCI+NzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtbnVtYmVyIGNsYXNzPVxcXCJrZXlcXFwiPjg8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW51bWJlciBjbGFzcz1cXFwia2V5XFxcIj45PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1kZWxldGUgY2xhc3M9XFxcImtleSBrZXktLWVkaXRcXFwiPmRlbDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtbnVtYmVyIGNsYXNzPVxcXCJrZXlcXFwiPjQ8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW51bWJlciBjbGFzcz1cXFwia2V5XFxcIj41PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1udW1iZXIgY2xhc3M9XFxcImtleVxcXCI+NjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtb3BlcmF0aW9uIGNsYXNzPVxcXCJrZXlcXFwiPis8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW51bWJlciBjbGFzcz1cXFwia2V5XFxcIj4xPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1udW1iZXIgY2xhc3M9XFxcImtleVxcXCI+MjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtbnVtYmVyIGNsYXNzPVxcXCJrZXlcXFwiPjM8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZXJhdGlvbiBjbGFzcz1cXFwia2V5XFxcIj4tPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1udW1iZXIgY2xhc3M9XFxcImtleVxcXCI+LjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtbnVtYmVyIGNsYXNzPVxcXCJrZXlcXFwiPjA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZXJhdGlvbiBjbGFzcz1cXFwia2V5XFxcIj4vPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1vcGVyYXRpb24gY2xhc3M9XFxcImtleVxcXCI+KjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtcmVzZXQgY2xhc3M9XFxcImtleSBrZXktLWVkaXQga2V5LS1sb25nXFxcIj5yZXNldDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtZXF1YWxzIGNsYXNzPVxcXCJrZXkga2V5LS1sb25nIGtleS0tcmVzdWx0XFxcIj49PC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbjwvYm9keT5cXG5cXG48L2h0bWw+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGN1bGF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IocHJldmlvdXNPcGVyYW5kRGlzcGxheSwgY3VycmVudE9wZXJhbmREaXNwbGF5KSB7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c09wZXJhbmREaXNwbGF5ID0gcHJldmlvdXNPcGVyYW5kRGlzcGxheTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRPcGVyYW5kRGlzcGxheSA9IGN1cnJlbnRPcGVyYW5kRGlzcGxheTtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgLy8gdXBkYXRlIHRvIGRpc3BsYXkgMCBcclxuICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcclxuICAgIH1cclxuICAgIGNsZWFyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IGBgO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gYDBgO1xyXG4gICAgICAgIHRoaXMub3BlcmF0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlTGFzdENoYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGxhc3QgY2hhciBmcm9tIHN0cmluZ1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcGVyYW5kRGlzcGxheS50ZXh0Q29udGVudCA9PSBgZXJyYCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5jdXJyZW50VmFsdWUuc2xpY2UoMCwgLTEpO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kQ2hhciA9IGNoYXIgPT4ge1xyXG4gICAgICAgIC8vIHJldHVybiBpZiBlcnIgaXMgZGlzcGxheWVkXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wZXJhbmREaXNwbGF5LnRleHRDb250ZW50ID09IGBlcnJgKSByZXR1cm47XHJcbiAgICAgICAgLy8gcmV0dXJuIGlmIGl0cyBub3QgZmlyc3QgcGVyaW9kKGRvdClcclxuICAgICAgICBpZiAoY2hhciA9PT0gYC5gICYmIHRoaXMuY3VycmVudFZhbHVlLmluY2x1ZGVzKGAuYCkpIHJldHVybjtcclxuICAgICAgICAvLyBrZWVwIGZpcnN0IDAgb25seSBpZiBjaGFyIGlzIHBlcmlvZChkb3QpXHJcbiAgICAgICAgaWYgKGNoYXIgIT09IGAuYCkgdGhpcy5jdXJyZW50VmFsdWUgPT09ICcwJyA/IHRoaXMuY3VycmVudFZhbHVlID0gYGAgOiBgYDtcclxuICAgICAgICAvLyBjaGFyIGxpbWl0IHRvIDlcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VmFsdWUubGVuZ3RoID49IDEwKSByZXR1cm47XHJcbiAgICAgICAgLy8gYWRkIGNoYXIgdG8gdGhlIGVuZCBcclxuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMuY3VycmVudFZhbHVlLnRvU3RyaW5nKCkgKyBjaGFyLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVCdXR0b25TdGF0ZSA9IGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoYGFjdGl2ZWApO1xyXG4gICAgfVxyXG4gICAgYWRkT3BlcmF0aW9uID0gb3BlcmF0aW9uID0+IHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50T3BlcmFuZERpc3BsYXkudGV4dENvbnRlbnQgPT09IGBlcnJgKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wZXJhbmREaXNwbGF5LnRleHRDb250ZW50ID09PSBgLWApIHJldHVybjtcclxuICAgICAgICAvLyBmaXJzdCBjbGlja2VkIG1pbnVzIGFkZHMgLSBhcyBmaXJzdCBjaGFyIGFuZCBtYWtlcyBudW1iZXIgbmVnYXRpdmUgaW4gZXZhbCgpXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFZhbHVlID09PSBgMGApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9wZXJhdGlvbiA9PT0gYC1gID8gdGhpcy5jdXJyZW50VmFsdWUgPSBvcGVyYXRpb24gOiBgYDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNoYW5nZSB0byAwIGlmIHVzZXIgaW5zZXJ0cyBzdGggbGlrZSAwLjAwMDAgb3IgMC5cclxuICAgICAgICBldmFsKGAke3RoaXMuY3VycmVudFZhbHVlfSoxYCkgPT09IDAgPyB0aGlzLmN1cnJlbnRWYWx1ZSA9IGAwYCA6IGBgO1xyXG4gICAgICAgIC8vIGZpcnN0IHRpbWUgd2hlbiBwcmV2aW91c1ZhbHVlIGlzIHVuZGVmaW5lZCwgZG9udCBjb21wdXRlIGFuZCBqdXN0IHN3YXAgdmFsdWVzXHJcbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXB1dGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcGVyYXRpb24gPSBvcGVyYXRpb247XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBgYDtcclxuXHJcbiAgICB9XHJcbiAgICBjb21wdXRlID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbXB1dGUgc3R1ZmZcclxuICAgICAgICBsZXQgY29tcHV0YXRpb24gPSBldmFsKGAke3RoaXMucHJldmlvdXNWYWx1ZX0gJHt0aGlzLm9wZXJhdGlvbn0gJHt0aGlzLmN1cnJlbnRWYWx1ZX1gKTtcclxuICAgICAgICAvLyBkZWxldGUgbGFzdCwgdW5uZWNlc3NhcnkgemVyb3MgYWZ0ZXIgcGVyaW9kXHJcbiAgICAgICAgY29tcHV0YXRpb24gPSBwYXJzZUZsb2F0KGNvbXB1dGF0aW9uLnRvRml4ZWQoOCkpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gY29tcHV0YXRpb24udG9TdHJpbmcoKTtcclxuICAgICAgICAvLyBpZiBjdXJyZW50IHZhbHVlIGlzIG9uZSBvZiB0aG9zZSB0aHJlZSwgdGhlbiBzZW5kIGVycm9yXHJcbiAgICAgICAgaWYgKFtgSW5maW5pdHlgLCBgLUluZmluaXR5YCwgYE5hTmBdLmluZGV4T2YodGhpcy5jdXJyZW50VmFsdWUpID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBgZXJyYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVEaXNwbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmIGxhc3QgY2hhciBpcyBkZWxldGVkLCB0aGVuIGRpc3BsYXkgMFxyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID09PSBgYCA/IHRoaXMuY3VycmVudFZhbHVlID0gYDBgIDogYGA7XHJcbiAgICAgICAgLy8gaWYgb3BlcmF0aW9uIGlzIHVuZGVmaW5lZCwgdGhlbiBjb25jYXQgZW1wdHkgc3RyaW5nXHJcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uU2lnbiA9IHRoaXMub3BlcmF0aW9uID09PSB1bmRlZmluZWQgPyAnJyA6IHRoaXMub3BlcmF0aW9uO1xyXG4gICAgICAgIC8vIHVwZGF0ZSBib3RoIGRpc3BsYXlzXHJcbiAgICAgICAgdGhpcy5wcmV2aW91c09wZXJhbmREaXNwbGF5LnRleHRDb250ZW50ID0gdGhpcy5wcmV2aW91c1ZhbHVlICsgb3BlcmF0aW9uU2lnbjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRPcGVyYW5kRGlzcGxheS50ZXh0Q29udGVudCA9IHRoaXMuY3VycmVudFZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2hvd1Jlc3VsdCA9ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAodGhpcy5vcGVhcnRpb24gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZSgpO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IGBgO1xyXG4gICAgICAgIHRoaXMub3BlcmF0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlbWVTd2l0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYWxjdWxhdG9yLCBzd2l0Y2hlcikge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRvciA9IGNhbGN1bGF0b3I7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hlciA9IHN3aXRjaGVyO1xyXG4gICAgfVxyXG4gICAgZ2V0SW5kZXggPSAobnVtYmVyLCBhcnJheSkgPT4gYXJyYXkuaW5kZXhPZihudW1iZXIpO1xyXG4gICAgLy8gdGhpcyBmdW5jdGlvbiByZXR1cm5zIDAsIDEgb3IgMiBkZXBlbmRpbmcgb24gd2hpY2ggMS8zIHBhcnQgb2Ygc3RhZGl1bSBzaGFwZWQgZWxlbWVudCB1c2VyIGNsaWNrcyAobGVmdCwgbWlkZGxlLCByaWdodClcclxuICAgIGdldEluZGV4RnJvbUNsaWNrUG9zaXRpb24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IE1vdXNlWCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgY29uc3QgdGhpcmRPZlN3aXRjaGVyTGVuZ3RoID0gcmVjdC53aWR0aCAvIDM7XHJcbiAgICAgICAgLy8gdGhpcyByZXR1cm5zIDAsIDEgb3IgMlxyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1vdXNlWCAvIHRoaXJkT2ZTd2l0Y2hlckxlbmd0aCk7XHJcbiAgICB9O1xyXG4gICAgZ2V0VGhlbWVOYW1lID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYGJsdWUtdGhlbWVgO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYGxpZ2h0LXRoZW1lYDtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBwdXJwbGUtdGhlbWVgO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBzZXRUaGVtZUluU3RvcmFnZSA9ICh0aGVtZSkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGhlbWVgLCB0aGVtZSk7XHJcbiAgICB9O1xyXG4gICAgY2hhbmdlVGhlbWUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdUaGVtZSA9IHRoaXMuZ2V0VGhlbWVOYW1lKGluZGV4KTtcclxuICAgICAgICB0aGlzLnNldFRoZW1lSW5TdG9yYWdlKG5ld1RoZW1lKTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0b3IuY2xhc3NOYW1lID0gYGA7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdG9yLmNsYXNzTGlzdC5hZGQobmV3VGhlbWUpO1xyXG4gICAgfTtcclxuICAgIGNoYW5nZVRoZW1lRnJvbVN0b3JhZ2UgPSAodGhlbWUpID0+IHtcclxuICAgICAgICAvLyBzZXQgdGhlbWUgaWYgaXQncyBmaXJzdCB2aXNpdCBvbiB3ZWJzaXRlXHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdGhlbWVgKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRoZW1lYCwgdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdUaGVtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRvci5jbGFzc0xpc3QuYWRkKG5ld1RoZW1lKTtcclxuICAgIH07XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zY3NzL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgJy4uL2luZGV4Lmh0bWwnO1xyXG4vLyBqcyBtb2R1bGVzXHJcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vanMvY2FsY3VsYXRvcic7XHJcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJy4vanMvdGhlbWUtc3dpdGNoZXInO1xyXG5cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPT09PT09PT09PT09PT0gY2FsY3VsYXRvciA9PT09PT09PT09PT09PT09PT09XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8vIGRpc3BsYXlzXHJcbmNvbnN0IHByZXZpb3VzT3BlcmFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByZXYtb3BlcmFuZF1gKTtcclxuY29uc3QgY3VycmVudE9wZXJhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jdXJyZW50LW9wZXJhbmRdYCk7XHJcbi8vIGJ1dHRvbnNcclxuY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yZXNldF1gKTtcclxuY29uc3QgZXF1YWxzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZXF1YWxzXWApO1xyXG5jb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1kZWxldGVdYCk7XHJcbmNvbnN0IG51bWJlckJ0bnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtbnVtYmVyXWApXTtcclxuY29uc3Qgb3BlcmF0aW9uQnRucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1vcGVyYXRpb25dYCldO1xyXG5jb25zdCBhbGxCdXR0b25zID0gW3Jlc2V0QnRuLCBlcXVhbHNCdG4sIGRlbGV0ZUJ0biwgLi4ubnVtYmVyQnRucywgLi4ub3BlcmF0aW9uQnRuc107XHJcblxyXG5jb25zdCBjYWxjdWxhdG9yID0gbmV3IENhbGN1bGF0b3IocHJldmlvdXNPcGVyYW5kLCBjdXJyZW50T3BlcmFuZCk7XHJcblxyXG4vLyBwdXNoIGJ1dHRvbiBlZmZlY3RcclxuYWxsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihgbW91c2Vkb3duYCwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNhbGN1bGF0b3IudG9nZ2xlQnV0dG9uU3RhdGUoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9KTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKGBtb3VzZXVwYCwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNhbGN1bGF0b3IudG9nZ2xlQnV0dG9uU3RhdGUoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vLyBhZGQgY2hhclxyXG5udW1iZXJCdG5zLmZvckVhY2gobnVtYmVyID0+IHtcclxuICAgIG51bWJlci5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGV2ZW50ID0+IHtcclxuICAgICAgICBjYWxjdWxhdG9yLmFwcGVuZENoYXIoZXZlbnQuY3VycmVudFRhcmdldC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY2FsY3VsYXRvci51cGRhdGVEaXNwbGF5KCk7XHJcbiAgICB9KVxyXG59KTtcclxuXHJcbi8vIGRlbGV0ZSBsYXN0IGNoYXIgXHJcbmRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpID0+IHtcclxuICAgIGNhbGN1bGF0b3IuZGVsZXRlTGFzdENoYXIoKTtcclxuICAgIGNhbGN1bGF0b3IudXBkYXRlRGlzcGxheSgpO1xyXG59KTtcclxuXHJcbi8vIGRlbGV0ZSBhbGxcclxucmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XHJcbiAgICBjYWxjdWxhdG9yLmNsZWFyKCk7XHJcbiAgICBjYWxjdWxhdG9yLnVwZGF0ZURpc3BsYXkoKTtcclxufSk7XHJcblxyXG4vL2FkZCBvcGVyYXRpb25cclxub3BlcmF0aW9uQnRucy5mb3JFYWNoKG9wZXJhdGlvbiA9PiB7XHJcbiAgICBvcGVyYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBldmVudCA9PiB7XHJcbiAgICAgICAgY2FsY3VsYXRvci5hZGRPcGVyYXRpb24oZXZlbnQuY3VycmVudFRhcmdldC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY2FsY3VsYXRvci51cGRhdGVEaXNwbGF5KCk7XHJcbiAgICB9KVxyXG59KTtcclxuZXF1YWxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xyXG4gICAgY2FsY3VsYXRvci5zaG93UmVzdWx0KCk7XHJcbiAgICBjYWxjdWxhdG9yLnVwZGF0ZURpc3BsYXkoKTtcclxufSk7XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vID09PT09PT09PT09PT09IGNhbGN1bGF0b3IgPT09PT09PT09PT09PT09PT09PVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuY29uc3QgbnVtYmVycyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS10aGVtZS1udW1iZXJdYCldO1xyXG5jb25zdCBzd2l0Y2hlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zd2l0Y2gtd3JhcHBlcl1gKTtcclxuY29uc3QgY2FsY3VsYXRvck1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNhbGN1bGF0b3JdYCk7XHJcbmNvbnN0IHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtc3dpdGNoZXJdYCk7XHJcblxyXG5jb25zdCB0aGVtZVN3aXRjaGVyID0gbmV3IFRoZW1lU3dpdGNoZXIoY2FsY3VsYXRvck1vZHVsZSwgc3dpdGNoZXIpO1xyXG5cclxuXHJcblxyXG4vLyBzZXQgdGhlbWUgXHJcbm51bWJlcnMuZm9yRWFjaChudW1iZXIgPT4ge1xyXG4gICAgbnVtYmVyLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhlbWVTd2l0Y2hlci5nZXRJbmRleChudW1iZXIsIG51bWJlcnMpO1xyXG4gICAgICAgIHRoZW1lU3dpdGNoZXIuY2hhbmdlVGhlbWUoaW5kZXgpO1xyXG4gICAgfSlcclxufSk7XHJcblxyXG5zd2l0Y2hlcldyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBldmVudCA9PiB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoZW1lU3dpdGNoZXIuZ2V0SW5kZXhGcm9tQ2xpY2tQb3NpdGlvbihldmVudCk7XHJcbiAgICB0aGVtZVN3aXRjaGVyLmNoYW5nZVRoZW1lKGluZGV4KTtcclxufSk7XHJcblxyXG5cclxuLy8gc2V0IHRoZW1lIHJpZ2h0IGFmdGVyIHBhZ2UgbG9hZFxyXG4oKCkgPT4ge1xyXG4gICAgY29uc3QgYWN0dWFsVGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRoZW1lYCk7XHJcbiAgICBpZiAoYWN0dWFsVGhlbWUgPT09IGBwdXJwbGUtdGhlbWVgKSB7XHJcbiAgICAgICAgdGhlbWVTd2l0Y2hlci5jaGFuZ2VUaGVtZUZyb21TdG9yYWdlKGBwdXJwbGUtdGhlbWVgKTtcclxuICAgIH0gZWxzZSBpZiAoYWN0dWFsVGhlbWUgPT09IGBsaWdodC10aGVtZWApIHtcclxuICAgICAgICB0aGVtZVN3aXRjaGVyLmNoYW5nZVRoZW1lRnJvbVN0b3JhZ2UoYGxpZ2h0LXRoZW1lYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoZW1lU3dpdGNoZXIuY2hhbmdlVGhlbWVGcm9tU3RvcmFnZShgYmx1ZS10aGVtZWApO1xyXG4gICAgfVxyXG59KSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9