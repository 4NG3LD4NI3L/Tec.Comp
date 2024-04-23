var express = require('express');
var router = express.Router();

var users = [
  {
    id: 1,
    name: 'John',
    email: 'john@example.com'
  },
  {
    id: 2,
    name: 'Jane',
    email: 'jane@example.com'
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

/* POST a new user. */
router.post('/', function(req, res, next) {
  var newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

/* PUT/PATCH an existing user by ID. */
router.put('/:id', function(req, res, next) {
  var userId = parseInt(req.params.id);
  var updatedUser = req.body;
  users.forEach(function(user, index) {
    if (user.id === userId) {
      users[index] = updatedUser;
    }
  });
  res.json(updatedUser);
});

/* DELETE an existing user by ID. */
router.delete('/:id', function(req, res, next) {
  var userId = parseInt(req.params.id);
  users = users.filter(function(user) {
    return user.id !== userId;
  });
  res.status(204).send();
});

module.exports = router;
