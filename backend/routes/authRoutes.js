const express = require('express'); // Import express library
const router = express.Router(); // Create router instance
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
