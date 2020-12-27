// 1. To create this custom element we're using a classical CustomAnchor which instead of extending HTML element, we're extending the HTML anchor element. First 

class CustomAnchor extends HTMLAnchorElement {
    connectedCallBack() {
        this.addEventListener('click', ev => {
            ev.preventDefault();
            const result = confirm('Estás segura de que quieres dejar mi página para navegar por San Google?');
            if (result) {
                window.location.href = ev.target.href;
            }
        });
    }
}
window.customElements.define('custom-anchor', CustomAnchor, { extends: 'a' });