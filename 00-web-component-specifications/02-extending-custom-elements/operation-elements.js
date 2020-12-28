class DivisionElement extends HTMLElement {
    // 1. DivisionElement is the class which defines our custom element
    divideByTen(value) {
        console.log(parseInt(value) / 10);
    }
}

window.customElements.define('do-division', DivisionElement); 

// 2. Now we need to tell the browser about the class that defines our custom element and specify a HTML tag. To do this, we use a custom elements API.

// 3. Using the define method, we first provide the tag name, which must have a hyphen 'do-division' and them the element proptotype, which is the CLASS we've just created. 

// If we go ahead and open the project in the browser, we won't see anything rendered, because our custom element doesn't have any content

// 4. Let's create another element

class MultiplyElement extends DivisionElement {
    multiplyByTen(value) {
        console.log(parseInt(value) * 10);  
    }

}

window.customElements.define('do-multiply', MultiplyElement); 