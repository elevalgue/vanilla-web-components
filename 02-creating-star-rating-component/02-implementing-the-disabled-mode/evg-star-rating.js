class EvgStarRating extends HTMLElement{
    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'open' });
        this._$stop = null;
        this._$bottom = null;
        // 1. We'll create a private disable variable
        this._disabled = null; 
    }  
    
    connectedCallback() {
        
   // Line 60 - The CSS we added first resets the cursor so the user doesn't have to think they're able to click the element in disabled mode. Then it just cancels out the display and the none property in line 41 because we want the top layer of stars to be visible on hover for disabled mode, and it also cancels out the hover effect of the bottom stars. 
    // Using the host selector along with brackets, we can specify the disable to distribute, which means these CSS properties will only get apllied when our custom element has a disabled a ttribute.  
        
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
        
        // 2. In the connectedcallback method, we'll set this variable to true if the disabled attribute is present. Otherwise, it ill be false. 
        // We aldo need to observe changes of the disabled attribute so it can update this variable if the desabled attribute is added or removed at one time. 
        
        this._disabled = (this.getAttribute('disabled') !== null);
    }
}

window.customElements.define('evg-star-rating', EvgStarRating)
