// Write a program that creates an `account` object with the following characteristics

function Account(name) {
  // create a 'name' property
  this.name = name;

  // create a 'balance' property set to 0
  this.balance = 0;

  // create a deposit method, adding the value passed in as an argument to the account balance
  this.deposit = function (num) {
    // create a new variable to hold the sum
    let newBalance = num + this.balance;
    // reset this.balance's value to newBalance's value
    this.balance = newBalance;

    // (optional: return the current balance)
    // return this.balance;
  };

  // create a 'describe' method returning the account description
  // 'Hi ____!  Your account has $__ in Checking.'
  this.describe = function () {
    return (
      'Hi ' +
      this.name +
      '!  Your account has ' +
      this.balance +
      'in Checking. \n'
    );
  };

  // create a 'transfer' method with two parameters: the name of the account that will receive the transfer, and amount of money to transfer
  this.transfer = function (friend, amount) {
    // subtract the amount from the current object's balance
    this.balance = this.balance - amount;
    // add the amount to the friend's balance
    friend.balance += amount;
    // print out the transfer
    return friend + ' has received $' + amount + ' from ' + this.name;
  };
}

console.log('BALANCES: \n');

// Test:

// 1) create an account for Billy, Rosie, Jack, and Jill
let Billy = new Account('Billy');
// 2) give them each an initial deposit
Billy.deposit(5);
// 3) print a string describing the current amount of money on each account
console.log(
  'Hi, Billy!  You currently have $' + Billy.balance + ' in Checking.'
);

// 1)
let Rosie = new Account('Rosie');
// 2)
Rosie.deposit(500);
// 3)
console.log(
  'Hi, Rosie!  You currently have $' + Rosie.balance + ' in Checking.'
);

// 1)
let Jack = new Account('Jack');
// 2)
Jack.deposit(25);
// 3)
console.log('Hi, Jack!  You currently have $' + Jack.balance + ' in Checking.');

// 1)
let Jill = new Account('Jill');
// 2)
Jill.deposit(300);
// 3)
console.log('Hi, Jill!  You currently have $' + Jill.balance + ' in Checking.');

console.log('\n');

console.log('TRANSFERS: \n');

// 4) Transfer positive values between Billy and Jack and negative values between Rosie and Jack
console.log(Billy.transfer('Jack', 5));
console.log(Jack.transfer('Billy', 5));

console.log(Rosie.transfer('Jack', -5));
console.log(Jack.transfer('Rosie', -5));

// creating name form to print output in console
let nameBtn = document.querySelector('.nameButton');

nameBtn.addEventListener('click', function (event) {
  let form = document.querySelector('#new_account_name');
  let accountName = form.value;
  console.log(accountName);
});

//creating balance inputs in form to print out in console
let balanceButton = document.querySelector('.balanceButton');

balanceButton.addEventListener('click', function (event) {
  let formBalance = document.querySelector('#new_balance');

  let accountBalance = formBalance.value;
  console.log(accountBalance);
});

// console.log(Billy);
// console.log(Jack);
// Extra:
// Cam you think of how a credit method would work?

// Each customer would have to have a different credit limit, then as they make purchases (array?), the balance decreaess.

// pop for balance button
// remember to use dot before classes, even in JS
// document.querySelector('.billy-balance').addEventListener('click', function () {
//   alert('You have an account balance of ' + Billy.balance);
// });

// document.querySelector('.rosie-balance').addEventListener('click', function () {
//   alert('You have an account balance of ' + Rosie.balance);
// });

// document.querySelector('.jack-balance').addEventListener('click', function () {
//   alert('You have an account balance of ' + Jack.balance);
// });

// document.querySelector('.jill-balance').addEventListener('click', function () {
//   alert('You have an account balance of ' + Jill.balance);
// });

// Third Attempt at connecting JS w/ HTML
// let createButton = document.querySelector('#create-button');

// createButton.addEventListener('click', function (event) {
//   let form = document.querySelector('#new_account_name');
//   let accountName = form.value;

//   const name = new Account(accountName);
//   console.log(name);

//   let messageP = document.querySelector('#create_account_msg');
//   let msg = document.createElement('span');

//   messageP.appendChild(document.createTextNode(name.message));
//   event.preventDefault();
// });
