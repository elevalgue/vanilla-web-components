class MyCustomElement extends HTMLElement {
    constructor() {
    super();
    console.log('My Custom Element constructed!');
    }
}
  // 3rd Callback

  // 1. This method is executed when the element is removed from the DOM. This method is used usually to do some clean up, for example, canceling any JavaScript intervals you have running
disconnectedCallback();
{
    console.log('My custom Element removed from the DOM');
}

  // This code is just an example to see how this callback method works. We're creating an instance of our MyCustomElement
let $ce = document.createElement('my-custom-element');
setTimeout(() => {
    // Add our Custom Element to the DOM
    document.body.appendChild($ce);
}, 3000);
