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
    // and configures a background-color animation used for the backdrop.
    
    // 8. Next is the nav element, which has the container class.
    // We use the translateX transform to slide if off the screen by default,
    // and use the transition to ensure the sliding effect is animated
    // the will-change transform property id added here to promote this element to a ew layer. 

    // 9. The CSS for the title and close button is pretty self-explanatory

    // 10. Finally we add some CSS for when the frame has an open class, which resets the pointer-event, allowing the frame and nav element to be clicked, and also removes the transform on the nav element, sliding it back in. 

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

        .container {
            width: 80%;
            max-width: 400px;
            background: #FFF;
            height: 100%;
            will-change: transform;
            transition: transform 300ms ease-in;
            box-shadow: 1px 0 3px rgba(51,51,51,0.25);
        }

        .title { 
            display: flex;
            flex-direction: row;
            min-height: 3.2em;
            font-size: 1.5em;
            backgorung-color: #F1F1F1;
            color: #666;
        }

        .title .title-content {
            flex-grow: 1;
            display: flex;
            align-items: center;
            padding-left: 1em;
        }

        .close {
            flex-basis: 100px;
            flex-grow: 0;
            flex-shrink: 0;
            cursor: pointer;
            display: flex;
            justify-content: center;
            user-select: none;
        }

        .frame .open {
            pointer-events: auto;
            background-color: rgba(0, 0, 0, 0.25);
        }

        .frame.open .container {
            transform: none; 
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