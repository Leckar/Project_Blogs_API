const express = require('express');
const { userController } = require('../controllers');
const {
  validateDisplayName,
  validadeEmail,
  validatePwd,
  validateImage,
} = require('../middlewares/userFieldsValidation');

const router = express.Router();

router.post('/', validateDisplayName,
  validadeEmail,
  validatePwd,
  validateImage,
  userController.registrationAuthenticator);

module.exports = router;