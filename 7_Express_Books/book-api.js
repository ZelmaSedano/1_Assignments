// import statements
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create the app
const app = express();
// set the port
const port = 3000;

// accessing the public folder where the cat loves
app.use(express.static('public'));
// connect html file
app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + '/' + 'index.html');
});

// create an empty array to push the books into
let books = [];

// use the CORS we imported
app.use(cors());

// configure body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// App to push the books
// we use post b/c we used the POST method in the HTML
app.post('/book', (req, res) => {
  const book = req.body;

  // Output the book to the console for debugging
  console.log(book);
  books.push(book);

  res.send('Book is added to the database');
});

// App to retrieve the books
app.get('/books', (req, res) => {
  res.json(books);
});

app.listen(port, () => console.log(`Books is running on port ${port}`));
