// import statements
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create the app
const app = express();
// set the port
const port = 3000;

app.get('/book/:isbn', (req, res) => {
  // Reading isbn from the URL
  const isbn = req.params.isbn;

  // Searching books for the isbn
  for (let book of books) {
    if (book.isbn === isbn) {
      res.json(book);
      return;
    }
  }

  // Sending 404 when not found something is a good practice
  res.status(404).send('Book not found');
});

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var xhr = new XMLHttpRequest();

const setEditModal = (isbn) => {
  // We will implement this later
};

const deleteBook = (isbn) => {
  // We will implement this later
};

const loadBooks = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'http://localhost:3000/books', false);
  xhttp.send();

  const books = JSON.parse(xhttp.responseText);

  for (let book of books) {
    const x = `
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>

            <div>Author: ${book.author}</div>
            <div>Publisher: ${book.publisher}</div>
            <div>Number Of Pages: ${book.numOfPages}</div>

            <hr>

            <button type="button" class="btn btn-danger">Delete</button>
            <button types="button" class="btn btn-primary" data-toggle="modal"
                data-target="#editBookModal" onClick="setEditModal(${book.isbn})">
                Edit
            </button>
          </div>
        </div>
      </div>
  `;

    document.getElementById('books').innerHTML =
      document.getElementById('books').innerHTML + x;
  }
};

loadBooks();

// App to retrieve the books
app.get('/books', (req, res) => {
  res.json(books);
});

app.listen(port, () => console.log(`Books is running on port ${port}`));
