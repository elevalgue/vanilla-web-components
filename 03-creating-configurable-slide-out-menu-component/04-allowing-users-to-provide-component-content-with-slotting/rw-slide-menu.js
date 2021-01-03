class RwSlideMenu extends HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'open' });
        // Element 
        this._$frame = null;
        // Data 
        this._open = false; 
    }

    // 1. We'll use a property to allow the user to set the open state of our component 
    // 2. we've already created the private variable to hold the boolean state.
    // 3. Let's add a setter & a getter for the open property

    set open(value) {
        // 4. The setter will take the value and determine if it's a Boolean value 
        const result = (value === true); 
        // 5. This ensures that if the user passes in something other than a Boolean, it will just default to false and not throw any errors. 
        // As always if the specified value isn't different to the value we currently have, just return 
        if (this._open = result) return;
        // 6. We then update the local open variable, 
        this._open = result;
        // 7. and then call the render method
        this._render();
    }

    // 8. The getter simply returns the private, open variable 
    get open() {
        return this._open;
    }

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

        :host([theme='red']).title {
            background-color: #E23F24
            color: white; 
        }

        :host([theme='blue']).title {
            background-color: #E23F24
            color: white; 
        }

        // 21. To finish off, we'll add the CSS which allows the user to disable the backdrop of our attribute. Once again we use the :host selectorm specifying the attributes and the value  

        :host ([backdrop="false"]) .frame.open{
            pointer-events: none;
            background-color: inherit;
        }

        :host ([backdrop="false"]) .frame.open .container {
            pointer-events: auto;
        }

        // 23. Let's go to index.html  
        </style>

        // 15.  To make this work we'll add the close dataset  property to all elements which can close the menu. In this case, that's the frame, i.e the backdrop, aaaaand 

        <div class="frame" data-closed="true">
            <nav class="container">
                <div class="title">
                    <div class="title-content">
                        Menu 
                    </div>

                    // 16. The close button
                    <a class="close" data-closed="true">&#10006;</a>
                </div>
                <div class="content>
                    <a href="#">Menu Item One</a>
                </div>
            </nav>
        </div>
        `;

        // 10. To store a reference to the frame element, which can do in the connectedCallback 
        this._$frame = _this._root.querySelector(".frame")
        // 11. Then add a single eventListener to the frame element, 
        this._$frame.addEventListener("click", (event) => {
          // 12.  which will use the event object to determine if the clicked element has a close dataset item.    
            if (event.target.dataset.closed === "true") {
                // 13. If it does, we set the property to false.
                this.open = false 
                // 14.  To make this work we'll add the close dataset 
          }  
        });
    }

    // 16. Next, we'll add the render method
    _render() {
        // 17. First, let's ensure the frame element is available, i.e. we've been connected to the DOM
        if (this._$frame !== null) {
            // 18. If open is true, when we need to add the open class to the frame element...
            if (this._open === true) {
                this._$frame.classList.add("open")
                // 19. Then we'll dispatch a CustomEvent called menu-opened informing any users that menu's just been opened
                this.dispatchEvent(new CustomEvent("menu-opened"))
                // 20. If open is false, then we'll do the opposite. We'll removed the open class and dispatch the menu-closed event
            } else {
                this._$frame.classList.add("open");
                this.dispatchEvent(new CustomEvent("menu-closed"));
            }

        }
        
    }

}

window.customElements.define('rw-slide-menu', RwSlideMenu);

// 9. There are 2 ways to close the menu:
    //(1)---> By the close button
    //(2)---> And by clicking the backdrop if it's enabled
// What we'll do is add and eventListener to both the frame element, i.e. the backdrop, and the close button, but to use as few eventListeners as possible, so
