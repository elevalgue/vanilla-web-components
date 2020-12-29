// 1. We'll define the prototype for my component custom element.

class MyComponent extends HTMLElement {

    // 2. Then we'll use the connectedCallback method which is executed when the element is added to the DOM.
    connectedCallback() {
        // 3. This will stamp an initial template for that component. Because 'this' refers to the element instance. We can just update the innerHTML property just as we would with the typical DOM element. To make.   

        // 4. Let's build a template with come content and basic styles.
        this.innerHTML = `
            <style>
                p {
                    color: red;
                }
            </style>
            <p>My Web Component</p>
            `;

    }
}

// 5. Here we're defining the custom elements so that can be used. To do that we use the customElemt API's define method specifying the tag name and the class we've just created.
window.customElements.define('my-component', MyComponent);