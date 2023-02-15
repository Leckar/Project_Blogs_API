const express = require('express');
const { loginController } = require('../controllers');
const loginFieldsValidator = require('../middlewares/loginFieldsValidator');

const router = express.Router();

router.post('/', loginFieldsValidator, loginController.loginAuthenticator);

module.exports = router;