export default class Calculator {
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
                if (this.previousValue === `0`) return this.currentValue = `err`;
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