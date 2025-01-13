(() => {
  "use strict";
  const e = class {
    selectors = {root: "[data-js-header]", overlay: "[data-js-overlay]", burgerButton: "[data-js-burger-button]"};
    stateClasses = {isActive: "is-active", isLocked: "is-locked"};
    bindEvents = () => {
      console.debug("bind"), this.burgerButtonElement.addEventListener("click", this.onBurgerClick)
    };
    onBurgerClick = () => {
      console.debug("click"), this.overlayElement.classList.toggle(this.stateClasses.isActive), this.burgerButtonElement.classList.toggle(this.stateClasses.isActive), document.documentElement.classList.toggle(this.stateClasses.isLocked)
    };

    constructor() {

      debugger:
            console.debug("constructor"), this.rootElement = document.querySelector(this.selectors.root), this.overlayElement = this.rootElement.querySelector(this.selectors.overlay), this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton), this.bindEvents()
    }
  };
  document.addEventListener("DOMContentLoaded", (function () {
    console.debug("create class"), new e
  }))
})();
//# sourceMappingURL=main.js.map
