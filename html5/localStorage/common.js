const addItems = document.querySelector('.add-items'); // form
const itemsList = document.querySelector('.plates'); // ul

function addItem(e) { // e is the event object, which is passed to the function when the event occurs.
  e.preventDefault(); // prevent the form from submitting and reloading the page.
  const text = (this.querySelector('[name=item]')).value; 
}

addItems.addEventListener('submit', addItem);