export default class ThemeSwitcher {
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