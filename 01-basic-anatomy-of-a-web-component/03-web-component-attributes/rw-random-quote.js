// 



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
        this._interval = setInterval(() => this._render(), 10000);
        this._render();
    }

    _render() {
        if (this._$quote !== null) {
            this._$quote.innerHTML = this._quotes[Math.floor(Math.random() * this._quotes.length)];
        }
    }
    disconnectedCallback() {
        clearInterval(this._interval); 
    }
}

window.customElements.define('rw-random-quote', RwRandomQuote);