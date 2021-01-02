class RwRandomQuote extends HTMLElement {
  
    constructor() {
        super();
        this._quotes = [
            "All we have to decide is what to do with the time that is given us.",
            "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            "Try not to become a man of success, but rather try to become a man of value."
        ];
        this._$quote = null;
        this._interval = null; 
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                .rw-container {
                    width: 500px;
                    margin: auto;
                    border: dotted 1px #999;
                    padding: 20px;
                }

                .rw-container h1 {
                    font-size: 20px;
                    margin: 0;
                }

            </style>

            <div class="rw-container">
                <h1>Random Quote:</h1>
                <p>"<span id="quote"></span>"</p>
            </div>
        `;

        this._$quote = this.querySelector('#quote');
        
        // 5. To access this element attribute we can use the getAttribute method. We call the setInterval method from the connectedCallback with any value from the interval attribute.
        // This way if there's an initial interval attribute specified in a set interval, will be configured with the specified value.
        // Let's jump over to index.html
        this._setInterval = (this.getAttribute('interval'));
        this._render();
    }

    _render() {
        if (this._$quote !== null) {
            this._$quote.innerHTML = this._quotes[Math.floor(Math.random() * this._quotes.length)];
        }
    }

    // 1. The first thing is to create a custom method called SetInterval. This will give us a reusable way to update the render interval.
    // This method will take the interval value in miliseconds. 
    _setInterval(value) {
        if (this._interval !== null) {
            // 2. It will first cancel any variable instances using the clear interval method.
            clearInterval(this._interval)
        }

        // 3. If value is greater than 0 it will configure a new interval.
        if (value > 0) {
            // 4. we're reusing the code from the previous exercise althoug instead of writing 1000 as parameter, now we're just writing down "value".
            this._interval = setInterval(() => this._render(), value);
        }
    }

    // 6. If we want to see the attribute changes we need to specify the observedAttributes method and provide an array of attributes we want to observe. 
    static get observedAttributes() {

        // 7. In this case, It's going to be the interval attribute
        return ['interval']; 
    }

    //8. Next, using the attributeChangedCallback can now be informed when the interval attribute value gets modified. 
    attributeChangedCallback(name, oldValue, newValue) {
        // 9. When the interval attribute gets updated, the attribute change callback will get executed and then we can now use the new value variable to call our set interval method with the new value. 
        this._setInterval(newValue);
    }

    disconnectedCallback() {
        clearInterval(this._interval); 
    }
}

window.customElements.define('rw-random-quote', RwRandomQuote);
