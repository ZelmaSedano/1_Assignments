/*** Nav Links (change color) ************/
// 1) Change the color of each nav-item
let navItems = document.getElementsByClassName('nav-item');

// loop through each item, changing the color
for (let i = 0; i < navItems.length; i++) {
  navItems[i].style.color = '#f09156';
  // remember to remove the ; inside the quotes from the CSS
}
/*********************************/

/*** Button ***********************/
// 2) Created a clickable button that can take user's email address and add them to a newsletter
function promptMe() {
  // create a variable to hold the prompt
  let response = prompt('Please enter your email!');
  // call the prompt with an alert box
  alert(response);
}
// 3) change the text inside the button
document.getElementById('newsletter-button').innerHTML = 'Food Newsletter';
/*********************************/

/*** Crossout <li> in <ul> *********/
// 3) Cross out lines when clicked - Tried, can't figure out :(
// document.addEventListener('DOMContentLoaded', () => {
//   // create a toggle function
//   const toggleLi = (e) => {
//     // create a variable to hold the target?
//     const li = e.target;

//     // toggle class
//     if (li.className === 'obtained') {
//       li.className = '';
//     } else {
//       li.className = 'obtained';
//     }
//   };

//   document.querySelectorAll('#ul-li').forEach((li) => {
//     // call function
//     li.addEventListener('click', toggleLi);
//   });
// });

/*** List Items (change color) ***********/
// 3) Change the color of the <li>'s in the <ol> (instructions)
// a) create a variable to grab the list-items
let tasks = document.getElementsByClassName('list-group-item');

// b) loop through the list items and change color?
for (let i = 0; i < tasks.length; i++) {
  tasks[i].style.color = '#2c612a';
}

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
