// 1. Create the component class
class RwSlideMenu extends HTMLElement {

    // 3. We'll create the class constructor which will create the Shadow root and some private variables, which we'll use later
    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'open' });
        // Element 
        // 4. The first private variable will hold a reference to the frame element 
        this._$frame = null;
        // Data 
        // 5. and we'll also create a private variable which will hold the open state. 
        this._open = false; 
    }
}

// 2. Defined the custom element
window.customElements.define('rw-slide-menu', RwSlideMenu);