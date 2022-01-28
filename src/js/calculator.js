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