// import statements
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create the app
const app = express();
// set the port
const port = 3000;

// create an empty array to push the books into
let books = [];

// use the CORS we imported
app.use(cors());

// configure body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// App
app.post('/book', (req, res) => {
  const book = req.body;

  // Output the book to the console for debugging
  console.log(book);
  books.push(book);

  res.send('Book is added to the database');
});

app.listen(port, () => console.log(`Books is running on port ${port}`));
