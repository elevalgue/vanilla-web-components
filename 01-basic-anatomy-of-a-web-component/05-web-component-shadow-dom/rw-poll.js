class RwPoll extends HTMLElement {
    constructor() {
        super();
        this._attached = false;
        this._data = null;
        this._selected = null;

        // Elements
        this._$question = null;
        this._$answers = null;

        // 2. When we introduce the shadow DOM, we'll need to place the template in the subDOM tree and also select the elements there too.
        // We'll attach a shadow root to this element making sure it's in open mode and store the reference to the shadow root in a private variable 
        this._root = this.attachShadow({ "mode": "open" });
    }
    connectedCallback() {
        this._attached = true;
        this.innerHTML = `
            <style>
                .rw-poll-container {
                    background-color: #333;
                }
                .rw-poll-container h3 {
                    margin: 0;
                    padding: 0 20px;
                    color: #FFF;
                    line-height: 50px;
                }
                .rw-poll-container ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                .rw-poll-container ul li {
                    padding: 0 20px;
                    line-height: 50px;
                    background-color: #E1E1E1;
                    border: solid 1px #CCC;
                    border-top: none;
                    cursor: pointer;
                }
                .rw-poll-container ul li:hover {
                    background-color: #CCC;
                }
                .rw-poll-container ul li.selected {
                    background-color: #5cb85c;
                    color: #FFF;
                }
            </style>
            <div class="rw-poll-container">
                <h3 id="question"></h3>
                <ul id="answers"></ul>
            </div>          
        `;
        this._$question = this.querySelector("#question");
        this._$answers = this.querySelector("#answers");
        this._$answers.addEventListener("click", (event) => {
            this._$answers.querySelectorAll("li").forEach(($li, index) => {
                if ($li === event.target) {
                    this.selected = index;
                }
            });
        });
        this._render();
    }
    _render() {
        if (this._attached && this._data !== null) {
            this._$answers.innerHTML = "";
            this._$question.innerHTML = this._data.question;
            this._data.answers.forEach((answer) => {
                const $li = document.createElement("li");
                $li.innerHTML = answer;
                this._$answers.appendChild($li);
            });
        }
    }
    set data(data) {
        if (this._data === data) return;
        this._data = data;
        this._render();
    }
    get data() {
        return this._data;
    }
    set selected(index) {
        const $answer = this._$answers.querySelector(`li:nth-child(${index + 1})`);
        if ($answer !== null) {
            this._$answers.querySelectorAll("li").forEach(($li) => {
                $li.classList.remove("selected");
            });
            $answer.classList.add("selected");
            this._selected = index;
        }
    }
    get selected() {
        return this._selected;
    }

    // 1. To define a property and a custom element, we will use setters and getters. We'll start by adding a data setter. 
    // A setter takes only a single argument which is the value being set on a property. 
    set data(data) {

        // 2. As a rule, always chech to see if the data being provided is actually new to avoid doing needless work.
        if (this._data === data) return;

        // 3. If there is something new instill the data to a private variable 
        this._data = data;

        // 4. And then call the render method to update the template with the new data. 
        this._render();
    }

   
    get data() {
        return this._data;
    }

    set selected(index) {
        const $answer = this._$answers.querySelector(`li:nth-child(${index + 1})`);
        if ($answer !== null) {
            this._$answers.querySelectorAll('li').forEach(($li) => {
                $li.classList.remove('selected');
            });
            $answer.classList.add('selected');
            this._selected = index;
        }
    }
    get selected() {
        return this._selected;
    }
}
window.customElements.define("rw-poll", RwPoll);