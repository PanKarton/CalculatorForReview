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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <!-- displays site properly based on user's device -->\n\n    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n\n    <title>Frontend Mentor | Calculator app</title>\n</head>\n\n<body>\n    <section data-calculator>\n        <div class=\"calculator\">\n            <div class=\"header\">\n                <h1 class=\"header__title\">calc</h1>\n                <div class=\"header__theme-switcher-wrapper\">\n                    <p class=\"header__theme-word\">theme</p>\n                    <div class=\"theme-switcher l-flex\">\n                        <ul class=\"theme-switcher__numbers\">\n                            <li>\n                                <button data-theme-number class=\"theme-switcher__number\">1</button>\n                            </li>\n                            <li>\n                                <button data-theme-number class=\"theme-switcher__number\">2</button>\n                            </li>\n                            <li>\n                                <button data-theme-number class=\"theme-switcher__number\">3</button>\n                            </li>\n                        </ul>\n                        <label data-switcher class=\"theme-switcher__switch\">\n                            <input type=\"checkbox\">\n                            <span class=\"theme-switcher__slider\"></span>\n                            <div data-switcher-hitbox class=\"hitbox\"></div>\n                            <div data-switcher-hitbox class=\"hitbox\"></div>\n                            <div data-switcher-hitbox class=\"hitbox\"></div>\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"screen\">\n                <div class=\"screen__prev-operand-wrapper\">\n                    <p data-prev-operand class=\"screen__prev-operand\"></p>\n                </div>\n                <div class=\"screen__current-operand-wrapper\">\n                    <p data-current-operand class=\"screen__current-operand\"></p>\n                </div>\n            </div>\n            <div class=\"keypad\">\n                <button data-number class=\"key\">7</button>\n                <button data-number class=\"key\">8</button>\n                <button data-number class=\"key\">9</button>\n                <button data-delete class=\"key key--edit\">del</button>\n                <button data-number class=\"key\">4</button>\n                <button data-number class=\"key\">5</button>\n                <button data-number class=\"key\">6</button>\n                <button data-operation class=\"key\">+</button>\n                <button data-number class=\"key\">1</button>\n                <button data-number class=\"key\">2</button>\n                <button data-number class=\"key\">3</button>\n                <button data-operation class=\"key\">-</button>\n                <button data-number class=\"key\">.</button>\n                <button data-number class=\"key\">0</button>\n                <button data-operation class=\"key\">/</button>\n                <button data-operation class=\"key\">*</button>\n                <button data-reset class=\"key key--edit key--long\">reset</button>\n                <button data-equals class=\"key key--long key--result\">=</button>\n            </div>\n        </div>\n    </section>\n</body>\n\n</html>";
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
        // return if its not first period(dot)
        if (char === `.` && this.currentValue.includes(`.`)) return;
        // remove keep 0 only if char is period(dot)
        if (char !== `.`) this.currentValue == '0' ? this.currentValue = `` : ``;
        // add char to the end
        this.currentValue = this.currentValue.toString() + char.toString();
    }
    toggleButtonState = button => {
        button.classList.toggle(`active`);
    }
    addOperation = operation => {
        // first time when previousValue is undefined, dont compute and just swap values
        if (this.previousValue) {
            this.compute();
        }
        this.operation = operation;
        this.previousValue = this.currentValue;
        this.currentValue = ``;

    }
    compute = () => {
        switch (this.operation) {
            case `+`:
                // current value is sum of 2 parseFloat'ed strings
                this.currentValue = parseFloat(this.previousValue) + parseFloat(this.currentValue);
                break;
            case `-`:
                this.currentValue = parseFloat(this.previousValue) - parseFloat(this.currentValue);
                break;
            case `*`:
                this.currentValue = parseFloat(this.previousValue) * parseFloat(this.currentValue);
                break;
            case `/`:
                this.currentValue = parseFloat(this.previousValue) / parseFloat(this.currentValue);
                break;
            default:
                break;
        }
        this.currentValue = this.currentValue.toString();
    }
    updateDisplay = () => {
        // if last char is deleted, then display 0
        this.currentValue === `` ? this.currentValue = `0` : ``;
        // if operation is undefined, then concatenate empty string
        const operationSign = this.operation === undefined ? '' : this.operation;
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
    getThemeName = index => {
        switch (index) {
            case 0:
                return `blue-theme`;
                break;
            case 1:
                return `light-theme`;
                break;
            case 2:
                return `purple-theme`
                break;
        }
    }
    setThemeInStorage = theme => {
        window.localStorage.setItem(`theme`, theme);
    }
    changeTheme = (number, array) => {
        const index = this.getIndex(number, array);
        const newTheme = this.getThemeName(index);
        this.setThemeInStorage(newTheme);
        this.calculator.className = ``;
        this.calculator.classList.add(newTheme);
    }
    changeThemeFromStorage = theme => {
        // set theme if it's first visit on website
        if (window.localStorage.getItem(`theme`) === null) {
            window.localStorage.setItem(`theme`, theme);
        }
        const newTheme = window.localStorage.getItem('theme');
        this.calculator.classList.add(newTheme);
    }

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
const hitboxes = [...document.querySelectorAll(`[data-switcher-hitbox]`)];

const calculatorModule = document.querySelector(`[data-calculator]`);
const switcher = document.querySelector(`[data-switcher]`);

const themeSwitcher = new _js_theme_switcher__WEBPACK_IMPORTED_MODULE_3__["default"](calculatorModule, switcher);

// set theme 
numbers.forEach(number => {
    number.addEventListener(`click`, () => {
        themeSwitcher.changeTheme(number, numbers);
    })
});
// switch is covered with 3 identical, transparent squares that work as hitbox to change theme if we want to click on `stadium shape` thing. Each index in array represents theme
hitboxes.forEach(hitbox => {
    hitbox.addEventListener(`click`, () => {
        themeSwitcher.changeTheme(hitbox, hitboxes);
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBEQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLENBQUMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvLi9pbmRleC5odG1sIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz85OGFmIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvLi9zcmMvanMvY2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzLy4vc3JjL2pzL3RoZW1lLXN3aXRjaGVyLmpzIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc3JjL2ltZy9mYXZpY29uLTMyeDMyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG5cXG48aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxuICAgIDwhLS0gZGlzcGxheXMgc2l0ZSBwcm9wZXJseSBiYXNlZCBvbiB1c2VyJ3MgZGV2aWNlIC0tPlxcblxcbiAgICA8bGluayByZWw9XFxcImljb25cXFwiIHR5cGU9XFxcImltYWdlL3BuZ1xcXCIgc2l6ZXM9XFxcIjMyeDMyXFxcIiBocmVmPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+XFxuXFxuICAgIDx0aXRsZT5Gcm9udGVuZCBNZW50b3IgfCBDYWxjdWxhdG9yIGFwcDwvdGl0bGU+XFxuPC9oZWFkPlxcblxcbjxib2R5PlxcbiAgICA8c2VjdGlvbiBkYXRhLWNhbGN1bGF0b3I+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYWxjdWxhdG9yXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XFxcImhlYWRlcl9fdGl0bGVcXFwiPmNhbGM8L2gxPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJfX3RoZW1lLXN3aXRjaGVyLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImhlYWRlcl9fdGhlbWUtd29yZFxcXCI+dGhlbWU8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aGVtZS1zd2l0Y2hlciBsLWZsZXhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwidGhlbWUtc3dpdGNoZXJfX251bWJlcnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGhlbWUtbnVtYmVyIGNsYXNzPVxcXCJ0aGVtZS1zd2l0Y2hlcl9fbnVtYmVyXFxcIj4xPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS10aGVtZS1udW1iZXIgY2xhc3M9XFxcInRoZW1lLXN3aXRjaGVyX19udW1iZXJcXFwiPjI8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRoZW1lLW51bWJlciBjbGFzcz1cXFwidGhlbWUtc3dpdGNoZXJfX251bWJlclxcXCI+MzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGRhdGEtc3dpdGNoZXIgY2xhc3M9XFxcInRoZW1lLXN3aXRjaGVyX19zd2l0Y2hcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGhlbWUtc3dpdGNoZXJfX3NsaWRlclxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc3dpdGNoZXItaGl0Ym94IGNsYXNzPVxcXCJoaXRib3hcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc3dpdGNoZXItaGl0Ym94IGNsYXNzPVxcXCJoaXRib3hcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc3dpdGNoZXItaGl0Ym94IGNsYXNzPVxcXCJoaXRib3hcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2NyZWVuXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2NyZWVuX19wcmV2LW9wZXJhbmQtd3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXByZXYtb3BlcmFuZCBjbGFzcz1cXFwic2NyZWVuX19wcmV2LW9wZXJhbmRcXFwiPjwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNjcmVlbl9fY3VycmVudC1vcGVyYW5kLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1jdXJyZW50LW9wZXJhbmQgY2xhc3M9XFxcInNjcmVlbl9fY3VycmVudC1vcGVyYW5kXFxcIj48L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImtleXBhZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1udW1iZXIgY2xhc3M9XFxcImtleVxcXCI+NzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtbnVtYmVyIGNsYXNzPVxcXCJrZXlcXFwiPjg8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW51bWJlciBjbGFzcz1cXFwia2V5XFxcIj45PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1kZWxldGUgY2xhc3M9XFxcImtleSBrZXktLWVkaXRcXFwiPmRlbDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtbnVtYmVyIGNsYXNzPVxcXCJrZXlcXFwiPjQ8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW51bWJlciBjbGFzcz1cXFwia2V5XFxcIj41PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1udW1iZXIgY2xhc3M9XFxcImtleVxcXCI+NjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtb3BlcmF0aW9uIGNsYXNzPVxcXCJrZXlcXFwiPis8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW51bWJlciBjbGFzcz1cXFwia2V5XFxcIj4xPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1udW1iZXIgY2xhc3M9XFxcImtleVxcXCI+MjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtbnVtYmVyIGNsYXNzPVxcXCJrZXlcXFwiPjM8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZXJhdGlvbiBjbGFzcz1cXFwia2V5XFxcIj4tPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1udW1iZXIgY2xhc3M9XFxcImtleVxcXCI+LjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtbnVtYmVyIGNsYXNzPVxcXCJrZXlcXFwiPjA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZXJhdGlvbiBjbGFzcz1cXFwia2V5XFxcIj4vPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1vcGVyYXRpb24gY2xhc3M9XFxcImtleVxcXCI+KjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtcmVzZXQgY2xhc3M9XFxcImtleSBrZXktLWVkaXQga2V5LS1sb25nXFxcIj5yZXNldDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtZXF1YWxzIGNsYXNzPVxcXCJrZXkga2V5LS1sb25nIGtleS0tcmVzdWx0XFxcIj49PC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbjwvYm9keT5cXG5cXG48L2h0bWw+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGN1bGF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IocHJldmlvdXNPcGVyYW5kRGlzcGxheSwgY3VycmVudE9wZXJhbmREaXNwbGF5KSB7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c09wZXJhbmREaXNwbGF5ID0gcHJldmlvdXNPcGVyYW5kRGlzcGxheTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRPcGVyYW5kRGlzcGxheSA9IGN1cnJlbnRPcGVyYW5kRGlzcGxheTtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgLy8gdXBkYXRlIHRvIGRpc3BsYXkgMCBcclxuICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcclxuICAgIH1cclxuICAgIGNsZWFyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IGBgO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gYDBgO1xyXG4gICAgICAgIHRoaXMub3BlcmF0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlTGFzdENoYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGxhc3QgY2hhciBmcm9tIHN0cmluZ1xyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5jdXJyZW50VmFsdWUuc2xpY2UoMCwgLTEpO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kQ2hhciA9IGNoYXIgPT4ge1xyXG4gICAgICAgIC8vIHJldHVybiBpZiBpdHMgbm90IGZpcnN0IHBlcmlvZChkb3QpXHJcbiAgICAgICAgaWYgKGNoYXIgPT09IGAuYCAmJiB0aGlzLmN1cnJlbnRWYWx1ZS5pbmNsdWRlcyhgLmApKSByZXR1cm47XHJcbiAgICAgICAgLy8gcmVtb3ZlIGtlZXAgMCBvbmx5IGlmIGNoYXIgaXMgcGVyaW9kKGRvdClcclxuICAgICAgICBpZiAoY2hhciAhPT0gYC5gKSB0aGlzLmN1cnJlbnRWYWx1ZSA9PSAnMCcgPyB0aGlzLmN1cnJlbnRWYWx1ZSA9IGBgIDogYGA7XHJcbiAgICAgICAgLy8gYWRkIGNoYXIgdG8gdGhlIGVuZFxyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5jdXJyZW50VmFsdWUudG9TdHJpbmcoKSArIGNoYXIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHRvZ2dsZUJ1dHRvblN0YXRlID0gYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZShgYWN0aXZlYCk7XHJcbiAgICB9XHJcbiAgICBhZGRPcGVyYXRpb24gPSBvcGVyYXRpb24gPT4ge1xyXG4gICAgICAgIC8vIGZpcnN0IHRpbWUgd2hlbiBwcmV2aW91c1ZhbHVlIGlzIHVuZGVmaW5lZCwgZG9udCBjb21wdXRlIGFuZCBqdXN0IHN3YXAgdmFsdWVzXHJcbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXB1dGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcGVyYXRpb24gPSBvcGVyYXRpb247XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBgYDtcclxuXHJcbiAgICB9XHJcbiAgICBjb21wdXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5vcGVyYXRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBgK2A6XHJcbiAgICAgICAgICAgICAgICAvLyBjdXJyZW50IHZhbHVlIGlzIHN1bSBvZiAyIHBhcnNlRmxvYXQnZWQgc3RyaW5nc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMucHJldmlvdXNWYWx1ZSkgKyBwYXJzZUZsb2F0KHRoaXMuY3VycmVudFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGAtYDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLnByZXZpb3VzVmFsdWUpIC0gcGFyc2VGbG9hdCh0aGlzLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBgKmA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5wcmV2aW91c1ZhbHVlKSAqIHBhcnNlRmxvYXQodGhpcy5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYC9gOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMucHJldmlvdXNWYWx1ZSkgLyBwYXJzZUZsb2F0KHRoaXMuY3VycmVudFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5jdXJyZW50VmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZURpc3BsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgbGFzdCBjaGFyIGlzIGRlbGV0ZWQsIHRoZW4gZGlzcGxheSAwXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPT09IGBgID8gdGhpcy5jdXJyZW50VmFsdWUgPSBgMGAgOiBgYDtcclxuICAgICAgICAvLyBpZiBvcGVyYXRpb24gaXMgdW5kZWZpbmVkLCB0aGVuIGNvbmNhdGVuYXRlIGVtcHR5IHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IG9wZXJhdGlvblNpZ24gPSB0aGlzLm9wZXJhdGlvbiA9PT0gdW5kZWZpbmVkID8gJycgOiB0aGlzLm9wZXJhdGlvbjtcclxuICAgICAgICB0aGlzLnByZXZpb3VzT3BlcmFuZERpc3BsYXkudGV4dENvbnRlbnQgPSB0aGlzLnByZXZpb3VzVmFsdWUgKyBvcGVyYXRpb25TaWduO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE9wZXJhbmREaXNwbGF5LnRleHRDb250ZW50ID0gdGhpcy5jdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcbiAgICBzaG93UmVzdWx0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZSgpO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IGBgO1xyXG4gICAgICAgIHRoaXMub3BlcmF0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlbWVTd2l0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYWxjdWxhdG9yLCBzd2l0Y2hlcikge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRvciA9IGNhbGN1bGF0b3I7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hlciA9IHN3aXRjaGVyO1xyXG5cclxuICAgIH1cclxuICAgIGdldEluZGV4ID0gKG51bWJlciwgYXJyYXkpID0+IGFycmF5LmluZGV4T2YobnVtYmVyKTtcclxuICAgIGdldFRoZW1lTmFtZSA9IGluZGV4ID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgYmx1ZS10aGVtZWA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBsaWdodC10aGVtZWA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBwdXJwbGUtdGhlbWVgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRUaGVtZUluU3RvcmFnZSA9IHRoZW1lID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRoZW1lYCwgdGhlbWUpO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlVGhlbWUgPSAobnVtYmVyLCBhcnJheSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleChudW1iZXIsIGFycmF5KTtcclxuICAgICAgICBjb25zdCBuZXdUaGVtZSA9IHRoaXMuZ2V0VGhlbWVOYW1lKGluZGV4KTtcclxuICAgICAgICB0aGlzLnNldFRoZW1lSW5TdG9yYWdlKG5ld1RoZW1lKTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0b3IuY2xhc3NOYW1lID0gYGA7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdG9yLmNsYXNzTGlzdC5hZGQobmV3VGhlbWUpO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlVGhlbWVGcm9tU3RvcmFnZSA9IHRoZW1lID0+IHtcclxuICAgICAgICAvLyBzZXQgdGhlbWUgaWYgaXQncyBmaXJzdCB2aXNpdCBvbiB3ZWJzaXRlXHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdGhlbWVgKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRoZW1lYCwgdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdUaGVtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0b3IuY2xhc3NMaXN0LmFkZChuZXdUaGVtZSk7XHJcbiAgICB9XHJcblxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc2Nzcy9zdHlsZS5zY3NzJztcclxuaW1wb3J0ICcuLi9pbmRleC5odG1sJztcclxuLy8ganMgbW9kdWxlc1xyXG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuL2pzL2NhbGN1bGF0b3InO1xyXG5pbXBvcnQgVGhlbWVTd2l0Y2hlciBmcm9tICcuL2pzL3RoZW1lLXN3aXRjaGVyJztcclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vID09PT09PT09PT09PT09IGNhbGN1bGF0b3IgPT09PT09PT09PT09PT09PT09PVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vLyBkaXNwbGF5c1xyXG5jb25zdCBwcmV2aW91c09wZXJhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcmV2LW9wZXJhbmRdYCk7XHJcbmNvbnN0IGN1cnJlbnRPcGVyYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY3VycmVudC1vcGVyYW5kXWApO1xyXG4vLyBidXR0b25zXHJcbmNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcmVzZXRdYCk7XHJcbmNvbnN0IGVxdWFsc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWVxdWFsc11gKTtcclxuY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZGVsZXRlXWApO1xyXG5jb25zdCBudW1iZXJCdG5zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLW51bWJlcl1gKV07XHJcbmNvbnN0IG9wZXJhdGlvbkJ0bnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtb3BlcmF0aW9uXWApXTtcclxuY29uc3QgYWxsQnV0dG9ucyA9IFtyZXNldEJ0biwgZXF1YWxzQnRuLCBkZWxldGVCdG4sIC4uLm51bWJlckJ0bnMsIC4uLm9wZXJhdGlvbkJ0bnNdO1xyXG5cclxuY29uc3QgY2FsY3VsYXRvciA9IG5ldyBDYWxjdWxhdG9yKHByZXZpb3VzT3BlcmFuZCwgY3VycmVudE9wZXJhbmQpO1xyXG5cclxuLy8gcHVzaCBidXR0b24gZWZmZWN0XHJcbmFsbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoYG1vdXNlZG93bmAsIGV2ZW50ID0+IHtcclxuICAgICAgICBjYWxjdWxhdG9yLnRvZ2dsZUJ1dHRvblN0YXRlKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihgbW91c2V1cGAsIGV2ZW50ID0+IHtcclxuICAgICAgICBjYWxjdWxhdG9yLnRvZ2dsZUJ1dHRvblN0YXRlKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gYWRkIGNoYXJcclxubnVtYmVyQnRucy5mb3JFYWNoKG51bWJlciA9PiB7XHJcbiAgICBudW1iZXIuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBldmVudCA9PiB7XHJcbiAgICAgICAgY2FsY3VsYXRvci5hcHBlbmRDaGFyKGV2ZW50LmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGNhbGN1bGF0b3IudXBkYXRlRGlzcGxheSgpO1xyXG4gICAgfSlcclxufSk7XHJcblxyXG4vLyBkZWxldGUgbGFzdCBjaGFyIFxyXG5kZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XHJcbiAgICBjYWxjdWxhdG9yLmRlbGV0ZUxhc3RDaGFyKCk7XHJcbiAgICBjYWxjdWxhdG9yLnVwZGF0ZURpc3BsYXkoKTtcclxufSk7XHJcblxyXG4vLyBkZWxldGUgYWxsXHJcbnJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xyXG4gICAgY2FsY3VsYXRvci5jbGVhcigpO1xyXG4gICAgY2FsY3VsYXRvci51cGRhdGVEaXNwbGF5KCk7XHJcbn0pO1xyXG5cclxuLy9hZGQgb3BlcmF0aW9uXHJcbm9wZXJhdGlvbkJ0bnMuZm9yRWFjaChvcGVyYXRpb24gPT4ge1xyXG4gICAgb3BlcmF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNhbGN1bGF0b3IuYWRkT3BlcmF0aW9uKGV2ZW50LmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGNhbGN1bGF0b3IudXBkYXRlRGlzcGxheSgpO1xyXG4gICAgfSlcclxufSk7XHJcbmVxdWFsc0J0bi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpID0+IHtcclxuICAgIGNhbGN1bGF0b3Iuc2hvd1Jlc3VsdCgpO1xyXG4gICAgY2FsY3VsYXRvci51cGRhdGVEaXNwbGF5KCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA9PT09PT09PT09PT09PSBjYWxjdWxhdG9yID09PT09PT09PT09PT09PT09PT1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbmNvbnN0IG51bWJlcnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtdGhlbWUtbnVtYmVyXWApXTtcclxuY29uc3QgaGl0Ym94ZXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtc3dpdGNoZXItaGl0Ym94XWApXTtcclxuXHJcbmNvbnN0IGNhbGN1bGF0b3JNb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jYWxjdWxhdG9yXWApO1xyXG5jb25zdCBzd2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXN3aXRjaGVyXWApO1xyXG5cclxuY29uc3QgdGhlbWVTd2l0Y2hlciA9IG5ldyBUaGVtZVN3aXRjaGVyKGNhbGN1bGF0b3JNb2R1bGUsIHN3aXRjaGVyKTtcclxuXHJcbi8vIHNldCB0aGVtZSBcclxubnVtYmVycy5mb3JFYWNoKG51bWJlciA9PiB7XHJcbiAgICBudW1iZXIuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XHJcbiAgICAgICAgdGhlbWVTd2l0Y2hlci5jaGFuZ2VUaGVtZShudW1iZXIsIG51bWJlcnMpO1xyXG4gICAgfSlcclxufSk7XHJcbi8vIHN3aXRjaCBpcyBjb3ZlcmVkIHdpdGggMyBpZGVudGljYWwsIHRyYW5zcGFyZW50IHNxdWFyZXMgdGhhdCB3b3JrIGFzIGhpdGJveCB0byBjaGFuZ2UgdGhlbWUgaWYgd2Ugd2FudCB0byBjbGljayBvbiBgc3RhZGl1bSBzaGFwZWAgdGhpbmcuIEVhY2ggaW5kZXggaW4gYXJyYXkgcmVwcmVzZW50cyB0aGVtZVxyXG5oaXRib3hlcy5mb3JFYWNoKGhpdGJveCA9PiB7XHJcbiAgICBoaXRib3guYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XHJcbiAgICAgICAgdGhlbWVTd2l0Y2hlci5jaGFuZ2VUaGVtZShoaXRib3gsIGhpdGJveGVzKTtcclxuICAgIH0pXHJcbn0pO1xyXG5cclxuLy8gc2V0IHRoZW1lIHJpZ2h0IGFmdGVyIHBhZ2UgbG9hZFxyXG4oKCkgPT4ge1xyXG4gICAgY29uc3QgYWN0dWFsVGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRoZW1lYCk7XHJcbiAgICBpZiAoYWN0dWFsVGhlbWUgPT09IGBwdXJwbGUtdGhlbWVgKSB7XHJcbiAgICAgICAgdGhlbWVTd2l0Y2hlci5jaGFuZ2VUaGVtZUZyb21TdG9yYWdlKGBwdXJwbGUtdGhlbWVgKTtcclxuICAgIH0gZWxzZSBpZiAoYWN0dWFsVGhlbWUgPT09IGBsaWdodC10aGVtZWApIHtcclxuICAgICAgICB0aGVtZVN3aXRjaGVyLmNoYW5nZVRoZW1lRnJvbVN0b3JhZ2UoYGxpZ2h0LXRoZW1lYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoZW1lU3dpdGNoZXIuY2hhbmdlVGhlbWVGcm9tU3RvcmFnZShgYmx1ZS10aGVtZWApO1xyXG4gICAgfVxyXG59KSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9