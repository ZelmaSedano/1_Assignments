// 1) Created a clickable button that can take user's email address and add them to a newsletter
function promptMe() {
  // create a variable to hold the prompt
  let response = prompt('Please enter your email!');
  // call the prompt with an alert box
  alert(response);
}

// 2) change the text inside the button
document.getElementById('newsletter-button').innerHTML = 'Food Newsletter';

/*********************************/

// 3) Change the color of the <li>'s in the <ol> (instructions)
// a) create a variable to grab the list-items
let tasks = document.getElementsByClassName('list-group-item');

// b) loop through the list items and change color?
for (let i = 0; i < tasks.length; i++) {
  tasks[i].style.color = '#2c612a';
}

/*********************************/

// 4) Change the color of the very last <li>
// create the variable to grab the list-item
document.getElementById('last-list-item').style.color = '#75513b';

/*********************************/

// 5) Created an array of links in footer
// BUG: how do I center this?? - create a div to nest everything in? textAlign: center?
const contact = ['Contact', 'About', 'Newsletter'];

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let anchor = document.createElement('a');
    anchor.textContent = arr[i];
    anchor.href = arr[i];
    let body = document.querySelector('body');
    body.appendChild(anchor);
    // let lineBreak = document.createElement('br');
    // body.appendChild(lineBreak);
  }
}

printArray(contact);
