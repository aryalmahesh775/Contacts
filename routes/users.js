// user.js will have  registar route

const express = require('express');
const router = express.Router();

// @route    POST api/users
//@desc      Register a router
//@access    Public
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;
