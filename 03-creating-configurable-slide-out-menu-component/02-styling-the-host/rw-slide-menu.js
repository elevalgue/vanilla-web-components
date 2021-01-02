class RwSlideMenu extends HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'open' });
        // Element 
        this._$frame = null;
        // Data 
        this._open = false; 
    }
    // 1. The only style we're going to apply based on the theme, to start with, is going to be the title, so we'll first use the :host selector. we'll use square brackets so we know we're dealing with attributes, then specify the theme attributes and the value we'd like to specify, in this case red.
    // 2. Then specifying the title class, 
    // 3. We can specify the appropiate background-color,
    // 4. and color 

    // 5. I'll also do exactly the same thing, except for the blue theme 

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

window.customElements.define('rw-slide-menu', RwSlideMenu);


// 6. If we open the project in the browser we can try out these themes. 
// 7. We're going to need to simulate opening the menu again using the open class
// 8. Once we've done that, we can then specify the theme attributes on the custom element, starting with red, we can see it gets applied.
// 9. And then changing the changing the value to blue, we can see that instantly the blue theme gets applied. 
