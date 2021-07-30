// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

function getMsSinceMidnight(time) {
  // create a variable to take the current time
  let e = new Date(time);
  // subtract the original time - midnight - that gives you the milliseconds
  // then divide the milliseconds by 1,000, then by 60
  return (time - e.setHours(0, 0, 0, 0)) / 60000;
}

console.log(getMsSinceMidnight(new Date()));

// I honestly got really lost with this algorithm, I will come back to it and work on it more :)
// this is defs not returning the correct answer :(
