// HTML imports allow us to include a HTML document just like a .css file

// Aren't restricted to markup.The document imports can include CSS and JavaScript (Often used in conjuction with HTML templates)

// HTML imports were design to be packaging mechanism for Web Components (Let's say were design to make including web components into applications really easy)

// Unfortunately, though, the HTML import specification is a contentious one owed to some browsers made the decision not to implement this spec and wait for the outcome of the JavaScript module spcification

// Although the HTML imports feature is very easy to polyfill 

// 2. Let's import the content of "notice.html" and make them available to us by selecting the link we've just added

const $link = document.getElementById('notice');

// 3. Get the content of that import
const content = $link.import.querySelector('.notice-frame');

// 4. Grab the notice frame and add the entirety of the notice frame to the body of index.html
document.body.appendChild(content.cloneNode(true));

// 5. Now if we open the browser we'll see that the contents of notice.html has been added to the main document