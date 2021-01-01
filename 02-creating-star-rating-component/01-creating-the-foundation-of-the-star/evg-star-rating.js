// 1. We'll start off by creating our class called EvgStarRating which extends the HTML element interface.
class EvgStarRating extends HTMLElement{
    // 3. The constructor will create a private variable. 
    constructor() {
        super();
        // 4. Storing a reference to the shadow root...
        this._root = this.attachShadow({ mode: 'open' });
        // 5. will create for this element.
        // 6. And also some private variables for important template element references 
        this._$stop = null;
        this._$bottom = null;
    }  
    // 7. Next up, within the connectedCallback we'll stamp an initial template.
    // We have a container with a top and bottom section.
    // The top section holds the gold stars which will become visible when a value is set by setting an appropiate width on this element.
    // The botton section holds the gray stars underneath.
    // We add a dataset-value for each of the bottom stars so when one is selected by the user, it's easy to get the selected value. 
    // You may have also noticed that these values are in the wrong order, but we'll explain this shortly.
    connectedCallback() {
    // 8. Moving on to the CSS, withing a shadow root, we can use the host selector, which refers to the hosts of the shadow root. In this case, that's our star rating element. Thi s means that we can aplly styles directly to the custom element from within the shadow root. 
    // Next we add some basic styling to position the container and its sections correctly, and finlally we add the hover effect. 

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
    }
}

// 2. The element name, as always will be the classname separated by hyphens and then we can just specify the class we just created
window.customElements.define('evg-star-rating', EvgStarRating)