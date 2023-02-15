const express = require('express');
const { loginAuthenticator } = require('../controllers/login.controller');
// const loginController = require('../controllers');
loginAuthenticator

const router = express.Router();

router.post('/login', loginAuthenticator);

module.exports = router;