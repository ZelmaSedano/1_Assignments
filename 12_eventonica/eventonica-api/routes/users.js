var express = require('express');
var router = express.Router();

//mock users
let users = [
  { name: 'Marlin', email: 'marlin@gmail.com', id: 1 },
  { name: 'Nemo', email: 'nemo@gmail.com', id: 2 },
  { name: 'Dory', email: 'dory@gmail.com', id: 3 },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  // send list of users from above
  res.json(users);
});

router.post('/add', function (req, res) {
  // create a new variable to hold newUser
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});

// Delete a User
router.delete('/:userId', function (req, res) {
  const id = Number(req.params.userId);
  users = users.filter((user) => user.id !== id);
  res.status(204).end();
});

module.exports = router;
