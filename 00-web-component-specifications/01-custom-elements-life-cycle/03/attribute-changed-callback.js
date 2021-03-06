class MyCustomElement extends HTMLElement {
    constructor() {
    super();
    console.log('My Custom Element constructed!');
    }

    // 2nd Callback

    // 1. Attribute change callback method,
    // which allows us to subscribe to changes of certain attributes on element instance. To configure what attributes we want to subscribe to, we must specify the names os these attributes,

    // 2. Using the static observed attributes get method, by providing an array of these names.
    static get observedAttributes() {
      // 3. For this example examlple, we'll only subscribe to changes for the demo attribute
    return ['demo'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
    console.log('Attribute Changed', name, oldValue, newValue);

      // 5. We'll use a descriptive console.log to see when this method is executed and see that we can react to attribute changes.
    }
}

window.customElements.define('my-custom-element', MyCustomElement);
