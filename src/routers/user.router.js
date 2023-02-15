const express = require('express');
const { userController } = require('../controllers');
const tokenValidator = require('../middlewares/tokenValidator');
const {
  validateDisplayName,
  validadeEmail,
  validatePwd,
  validateImage,
} = require('../middlewares/userFieldsValidator');

const router = express.Router();

router.get('/:id', tokenValidator, userController.getTargetUser);
router.get('/', tokenValidator, userController.getAllUsers);
router.post('/', validateDisplayName,
  validadeEmail,
  validatePwd,
  validateImage,
  userController.registrationAuthenticator);

module.exports = router;