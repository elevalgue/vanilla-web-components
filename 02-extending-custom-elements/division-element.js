class DivisonElement extends HTMLElement{
    dividedByTen(value) {
        console.log(parseInt(value)/10);
    }
}

window.customElements.define('do-division', DivisonElement); 