const express = require('express');
const { loginController } = require('../controllers');
const loginFieldsValidation = require('../middlewares/loginFieldsValidation');

const router = express.Router();

router.post('/', loginFieldsValidation, loginController.loginAuthenticator);

module.exports = router;