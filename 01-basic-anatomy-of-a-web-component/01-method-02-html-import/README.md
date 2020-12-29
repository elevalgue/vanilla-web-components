# **Method 2: HTML Import**

- How to write a Web Component skeleton using the HTML Import method
- How to consume Web Component written using the HTML Import method

## **Method 1: HTML Import Advantages**

- Automatic de-duplication of imports. This means that, if you include the same component in multiple places throughout your application, it won't get included more than once. This means it's easy to ensure you'll always have the component when you need it but you don't need to worry about it being included more than it should be

- Writing HTML & CSS is more natural and IDE support isn't an issue

## **Method 1: HTML Import Disadvantages**

- Currenty thte HTML Import spec is contentious and not well supported
- Even when polyfilled there are caveats which create bad code smells
- Hard ti transpile JavaScript within HTML files with current tools

### **Some theory**

- the HTML input spec hs only been implemented in Chrome which means to consume this component in anothe browser you'll need to use the HTML input Polyfill. Part of the work component.js suite of Polyfills. The workcomponents.js
