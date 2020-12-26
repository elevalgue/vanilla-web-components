
    /*-----Let's create our own DOM element------*/
    
      // 1. With this class we're defining our custom element

      // 2. and we extends the HTML element interface which will give us the typical methods and properties a DOM element is requiered to have.

    class MyCustomElement extends HTMLElement {
        constructor() {
          // 3. We define a CONSTRUCTOR where we must ALWAYS call SUPER to construct the parent.

          // In this case, this is the HTML element interface.

        super();
        console.log('My Custom Element constructed!');
          // 7. We render this in the browser. We can see that the constructor is called thanks to the console.log
        }
    }


      // 4. Now we have to tell the browser about the CLASS that defines our custom element and specify and HTML tag. To do this we use a custom element API

      // 5. Using the defined method, we first provide the tag name, which must have a hyphen and then the element's prototype, which is the CLASS we have just created.

    window.customElements.define('my-custom-element', MyCustomElement);

      // Now the browser will know how to construct any DOM elements with the tag name of "MyCustomElement"

