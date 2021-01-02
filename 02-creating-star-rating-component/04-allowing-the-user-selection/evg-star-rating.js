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
        this._value = 0;
    }  

    set value(value) {
        if (this._value === value) return;
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

        // 1. We're going to need to listen for  click on the bottom stars, so first, we'll need to create a reference to the bottom element. Again, we do that by using the query select method on the reference to the Shadow Root, selecting the class 

        this._$bottom = this._root.querySelector('.bottom');

        // 2. Then, by adding a click event handle to that element, we'll know one of the stars has been clicked.
        
        this._$bottom.addEventListener('click', (event) => {

            // 3. We don't want to perform any action if the element is in disabled mode, so we'll first ensure that the disabled value isn't set to true. Then, we'll make sure that the element has a dataset value, i.e. this is one of the bottom star elements. 

            if (this._disabled !== true && event.target.dataset.value !== undefined) {
                
                // 4. Finally is the current value is not the same as the just selected value, we'll then dispatch a  change event and aldo we'll set the value property to the new selected value.  
                
            if (this._value !== event.target.dataset.value) {
                this.dispatchEvent(new Event('change'));
                this.value = event.target.dataset.value;
                }
            }
        });
    }
 
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

// 5. In the browser, we'll first attach an event listener for the change event on our star rating component. Then when we make a selection, we can see that, that event is getting fired and that selection is being made. 

// The final implementation detail is that we male the same selection twice, the change event isn't fired because the value's not changed.