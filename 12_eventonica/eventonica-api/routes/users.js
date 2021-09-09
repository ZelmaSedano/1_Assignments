var express = require('express');
var router = express.Router();

//mock users
const users = [
  { name: 'Marlin', email: 'marlin@gmail.com', id: '1' },
  { name: 'Nemo', email: 'nemo@gmail.com', id: '2' },
  { name: 'Dory', email: 'dory@gmail.com', id: '3' },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(users);
});

router.post('/', function (req, res) {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});

// Delete a User
// you have to add a new endpoint w/ the id so that you can capture it
router.delete('/users/id', function (req, res) {
  const id = req.params.id;
  console.log(req.params.id);

  // remove item by id
  // you are automatically updating users w/ filter
  users = users.filter((user) => {
    // only return things that don't have the id
    user.id !== id;
  });
  res.send('Delete');
});

module.exports = router;
