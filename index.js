// Write your code here!
const mainer = document.getElementById('main');

mainer.remove();

const newHeader = document.createElement('h1');

newHeader.id = 'victory'

document.body.appendChild(newHeader)

newHeader.innerHTML = "Billy is the champion";

