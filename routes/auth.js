// auth will have login, authintication, way to checked the login router
// it will have two route 1.get the logged in user  2.log in the user and get the token

const express = require('express');
const router = express.Router();

// @route    GET api/auth
//@desc      Get logged in user
//@access    Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route    POST api/auth
//@desc      Auth user and get token
//@access    Public
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;
