// import express - this returns
const express = require('express');
// create Express app
const app = express();
const port = 3000;

// setting up endpoint ('/' = homepage)
app.get('/', (req, res) => {
  res.send('Hello World, from express');
});

// start the client - this sends our app to port 3000
app.listen(port, () => console.log(`Listening on port ${port}!`));
// console.log is printed in the terminal
