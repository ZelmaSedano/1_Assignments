var coin = document.getElementById('coin');
var button = document.getElementById('button');
var heads = 0;
var tails = 0;

// when you click the button, the coin 'flips'
function coinToss() {
  // create a random number, then multiply it by 2
  // ex: (Math.floor(Math.random(0.3337)) = 0.3) * 2 =
  const x = Math.floor(Math.random() * 2);
  /* If statement */
  if (x === 0) {
    // for some reason, if I put front first, it glitches??
    coin.innerHTML = '<img class="heads animate-coin" src="img/back.jpg"/>';
    // adds 1 to tails
    tails += 1;
  } else {
    coin.innerHTML = '<img class="tails animate-coin" src="img/front.jpg"/>';
    // adds 1 to heads
    heads += 1;
  }
}

// everytime you click the button, the coinToss function executes
button.onclick = function () {
  coinToss();
};

/* To-Do:
  - add favicon
  - how to have coin automatically loaded on page? 
*/
