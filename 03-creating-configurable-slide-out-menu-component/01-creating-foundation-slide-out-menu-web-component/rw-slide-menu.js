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

    // 6. In the connectedCallback method we'll stamp a initial template into the Shadow Root. 
    //In here we'll add the frame element, which cover the entire browser viewport. 
    // Then a nav element with a container class
    // Next the title which contains a content area and a close button
    // and finally, the menu content area and for the moment here we'll add some basic static content. 

    // 7. Moving on to the CSS, we'll first add some for the frame element.
    // This CSS ensures the frame covers the entire viewport, 
    // sets pointer-events to none, so the user can click through it,/ 
    // sets a high z - index, so it's all above all other elements, 
    // and configures a background-color animation used for the backdrop.// Next is the nav element, which has the container class.We use the translateX transform to slide if off the screen by default, 
    // and use the transition to ensure the sliding effect is animated

    connectedCallback() {
        this._root.innerHTML = `

        <style>
        .frame {
            position: fixed;
            top: 0;
            bottom: 0;
            width: 100%
            overflow: hidden;
            pointer-events: none;
            z-index: 1000;
            transition: background-color 300ms ease-in;
        }
        </style>
        
        <div class="frame">
            <nav class="container">
                <div class="title">
                    <div class="title-content">
                        Menu 
                    </div>
                    <a class="close">&#10006;</a>
                </div>
                <div class="content>
                    <a href="#">Menu Item One</a>
                </div>
            </nav>
        </div>
        `;
    
    }
}

// 2. Defined the custom element
window.customElements.define('rw-slide-menu', RwSlideMenu);