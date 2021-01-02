// In this demo we're going to create a random quote component which will print out a random quote every 10 seconds.

// 1. First of all we're creating the class and defining the custom element. 
class RwRandomQuote extends HTMLElement {

    // 2. Create the class constructot calling super
    constructor() {
        super();

        // 3. Create some private course array with 3 different quotes 
        this._quotes = [
            "All we have to decide is what to do with the time that is given us.",
            "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            "Try not to become a man of success, but rather try to become a man of value."
        ];

        // 4. A quotes variable which is going to store the reference to the DOM which will display the quote text. Know that here I also prefix it with a $ sign.
        this._$quote = null; 

        // We can do this with any variable that holds a reference to a DOM element so it's easy to see what type of data you are dealing with. By looking at that variable, you'll know instantly that you'll have access to methods like queryselector or the methods and properties at least part of the HTML element interface.

        // 5. Let's add an interval variable that will store the interval instance used to update the quote every ten seconds
        this._interval = null; 
    }

    // 6. Let's go with the connectedCallback method to stamp the component with our initial template.
    connectedCallback() {

        // 7. Here, we're displaying a title and providing an element to display que quote text, as well as added some basic styles, because We're not using the shadow DOM for its encapsulation in this component, we'll need to prefix the class names to limit the chance of a conflict. With the initial template added.
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

        // 8. I'll pull the reference to the quote element out and configure interval
        this._$quote = this.querySelector('#quote');

        // 9. The set interval function will call a random method which we haven't created yet. 
        this._interval = setInterval(() => this._render(), 10000);

        // 10. With the interval configured, we'll also need to initially call the render method
        this._render();
    }

    // 11. Let's move on and create the random method 
    // The random method is a custom method on our class
    _render() {

        // 12. We will prefix with an underscore identifying it as a private method that it shouldn't be used externally.  
        if (this._$quote !== null) {

            // 13. Then, what we'll do is take a random item from the quotes array and update the innerHTML of the quote element with the quote text. 
            this._$quote.innerHTML = this._quotes[Math.floor(Math.random() * this._quotes.length)];

            // Notice, that we're only updating the part of the DOM that needs to be changed by individually selecting the quote element
        }
    }

    // 14. Let's finish off, we'll use the disconnectedCallback method to get the interval that it won't continue to execute if the element has been removed from the DOM. 
    disconnectedCallback() {
        clearInterval(this._interval); 
    }
}

window.customElements.define('rw-random-quote', RwRandomQuote);
