/* hamburger menu */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

// /* first attempt: getting form values */
// document
//   .querySelector('form.form-inline')
//   .addEventListener('submit', function (e) {
//     e.preventDefault();
//     var formInput = document.querySelectorAll('#fname, #lname, #email, #phone');
//     console.log(formInput.value);
//   });

// 2nd attempt:
// iT WORKS!
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  var a = document.getElementById('fname').value;
  var b = document.getElementById('lname').value;
  var c = document.getElementById('email').value;
  var d = document.getElementById('phone').value;

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);

  return false;
});
