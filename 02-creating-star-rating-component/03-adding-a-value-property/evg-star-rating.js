class EvgStarRating extends HTMLElement{
    constructor() {
        super();
        // Shadow Root
        this._root = this.attachShadow({ mode: 'open' });
        // Elements
        this._$stop = null;
        this._$bottom = null;
        // Data
        this._disabled = null; 
        // 1. Start out by declaring the private value variable, which will hold the element in its current value.
        this._value = 0;
    }  
    
    // 4. The setter method, as always, will first check to see if the value provided is actually different to the current value. If it is, update the current value and then call the render method to update the template. 
    set value(value) {
        if (this._value === value) return;
        this._value = value;
        this._render();
    }
    
    // 5. The getter method simply returno the current value. 
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
        // 2. Then, in the connector callback, we'll create a reference to the top element, so we can update its width within the render method. We do that by simply using the query selector method on the reference to the shadow root to pull out the element with the top class. 
        this._$stop = this._root.querySelector('.top')
    }

    // 3. The render method is a custom class method which simply takes the value, multiplies it by ten, then doubles it to give us the required width percentage. And using the style property, you can set the width of the top element accordingly.  
    _render() {
        if (this._$stop !== null) {
            this._$stop.style.width = ((this._value * 10) * 2) + '%';
        }
    }
    
    static get observedAttributes() {
        return ['disabled'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            switch (name) {
                case 'disabled':
                    this._disabled = (newValue !== null);
            }
        }
    }
}

window.customElements.define('evg-star-rating', EvgStarRating)
