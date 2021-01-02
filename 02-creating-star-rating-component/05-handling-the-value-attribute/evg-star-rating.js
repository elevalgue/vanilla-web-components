class EvgStarRating extends HTMLElement{
    constructor() {
        super();
        // Shadow Root
        this._root = this.attachShadow({ mode: 'open' });
        // Elements
        this._$stop = null;
        this._$bottom = null;
        // Data
        this._disabled = false; 
        this._value = 0;

        // 3. we need to declare a private variable called touched. We'll then set this variable to true within the value setter
        this._touched = false; 
    }  

    set value(value) {
        
        if (this._value === value) return;
        // 4. so that if a user makes the selection or a value set by the value property, we'll know they want to ignore any value attribute changes. This is why we don't use the value property in th connector callback for the value attribute. 
        this._touched = true;
        this._value = value;
        this._render();
    }

    get value() {
        return this._value;
    }
    
    connectedCallback() {
        this._root.innerHTML =`
        <style>
        :host {
            width: 4.1em;
            height: 1em;
            display: inline-block;
            overflow: hidden;
            user-select: none;
            vertical-align: middle;
            box-sizing: border-box;
        }          
        .container {                  
          color: #c5c5c5;
          font-size: 1em;
          line-height: 1em;
          margin: 0 auto;
          position: relative;
          padding: 0;
          cursor: pointer;
        }               
        .container .top {
          color: #e7bd06;
          padding: 0;
          position: absolute;
          z-index: 1;
          display: block;
          top: 0;
          left: 0;
          overflow: hidden;
          width: 0;       
        }
        .container:hover .top {
            display: none;
        }                             
        .container .bottom {
          padding: 0;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          unicode-bidi: bidi-override;
          direction: rtl;
        }
        /* Credit: https://css-tricks.com/star-ratings/ */
        .container .bottom > span:hover,
        .container .bottom > span:hover ~ span {               
           color: #e7bd06;
        }    
              
        :host([disabled]) .container {
            cursor: inherit;
        }
        :host([disabled]) .container .top {
            display: block;
        }
        :host([disabled]) .container .bottom > span:hover,
        :host([disabled]) .container .bottom > span:hover ~ span {
            color: inherit;
        }
        </style>
        <div class="container">
            <div class="top">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div class="bottom">
                <span data-value="5">★</span><span data-value="4">★</span><span data-value="3">★</span><span data-value="2">★</span><span data-value="1">★</span>                   
            </div>
        </div>
    `;
        this._disabled = (this.getAttribute('disabled') !== null);
        this._$stop = this._root.querySelector('.top');
        this._$bottom = this._root.querySelector('.bottom');
        this._$bottom.addEventListener('click', (event) => {
            

            if (this._disabled !== true && event.target.dataset.value !== undefined) {
                
            if (this._value !== event.target.dataset.value) {
                this.dispatchEvent(new Event('change'));
                this.value = event.target.dataset.value;
                }
            }
        });

        // 1. The 1st thing to do is check the initial value of the value attribute withing the connector callback.
        const_initialValue = this.getAttribute('value');

        // 2. If there's a value, then update the private variable and call the render method.
        // There's a reason why we don't just use the value property here, which you'll see shortly
        if (initialValue !== null) {
            this._value = initialValue;
            this._render();
        }
    }
 
    _render() {
        if (this._$stop !== null) {
            this._$stop.style.width = ((this._value * 10) * 2) + '%';
        }
    }

    static get observedAttributes() {

        // 5. Next, we'll add an additional string to the return value of the observer distributes method, specifying we want to observe changes for 
        return ['disabled', 'value'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            switch (name) {
                case 'disabled':
                    this._disabled = (newValue !== null);
                    break;
                
                // 6. And then we add another case to the switch statement.

                case 'value':
                    // 7. We're at the touched value is false, we'll take the attribute value 
                    ç
                    if (this._touched === false) {
                        this._value = newValue
                        // and update the private variable calling the render method and that completes out star rating component. 
                        this._render();
                    }
                    break;
            }
        }
    }
}

window.customElements.define('evg-star-rating', EvgStarRating)

