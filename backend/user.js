const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  

  res.status(201).json({ message: 'User created successfully' });
});

module.exports = router;