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

        // We'll attach a shadow root to this element making sure it's in open mode and store the reference to the shadow root in a private variable.

        // Refreshing the component in the browser will show us a shadow root has been added. Now all we need to do is make sure we interact with the shadow root instead of the element's direct contents.

        // This is where we use the root variable. In the browser 
        this._root = this.attachShadow({ "mode": "open" });
    }
    connectedCallback() {
        this._attached = true;

        this._root.innerHTML = `
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

        // 3. In the browser we can see that our template is now in the Shadow root. Adding some data will also place the content in the Shadow root, because we updated the references to the questions and answer elements. 

        // Now in the browser we'll notice that our list items now have the desired background color because the shadow root of our work component won't inherit the main document styles giving us complete control over what our component looks like.
        
        this._$question = this._root.querySelector("#question");
        this._$answers = this._root.querySelector("#answers");
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