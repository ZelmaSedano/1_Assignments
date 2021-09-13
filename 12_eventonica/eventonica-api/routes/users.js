var express = require('express');
var router = express.Router();

//mock users
// notice that the id's are now integers instead of strings
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
  // push the new User to users array above
  users.push(newUser);
  // send a response w/ newUser - why this?
  res.json(newUser);
});

// Delete a User
router.delete('/:userId', function (req, res) {
  const id = Number(req.params.userId);
  // remove item by id
  // you are automatically updating users w/ filter
  // only return things that don't have the id
  // only return things that don't have the id
  let users = users.filter((user) => user.id !== id);
  //my response please set the http 204 which means no content and .end sends the response
  res.status(204).end();
});

module.exports = router;
