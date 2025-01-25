const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, signinUser, loginUser } = require('../Controllers/authController');

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test)
router.post('/signin', signinUser)
router.post('/login', loginUser)

module.exports = router