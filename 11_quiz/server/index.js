// use express
const express = require('express');
// make app
const app = express();
// set port
const PORT = process.env.PORT || 3001;
const question = require('./data');

app.get('/api', (req, res) => {
  res.json(question);
  // res.json({ message: 'Hello!' });
});

// listen to port
app.listen(PORT, () => console.log('Server is running on port 3001!'));

// import express from 'express';
// import cors from 'cors';
// comment
// import questions from './questions.js';

// const app = express();

// app.use(cors());
// app.use(express.json());

// const port = 5000;

// app.list(port, () => console.log(`Server running on port ${port}`));
