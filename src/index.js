import './scss/style.scss';
import '../index.html';
// js modules
import Calculator from './js/calculator';
import ThemeSwitcher from './js/theme-switcher';



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

const calculator = new Calculator(previousOperand, currentOperand);

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

const themeSwitcher = new ThemeSwitcher(calculatorModule, switcher);



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