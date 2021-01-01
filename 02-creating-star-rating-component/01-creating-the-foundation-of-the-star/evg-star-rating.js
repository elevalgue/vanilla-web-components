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
        this._root.innerHTML =`
        <style>
    
        
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