// Write your code here!
// Remove main element with id "main"
document.querySelector('#main').remove();

// Create new header element with id "victory"
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Set the inner text of the new header element to "YOUR-NAME is the champion"
newHeader.textContent = 'YOUR-NAME is the champion';

// Append the new header element to the body of the document
document.querySelector('body').appendChild(newHeader);
