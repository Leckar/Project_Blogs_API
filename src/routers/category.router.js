const express = require('express');
const { categoryController } = require('../controllers');
const categoriesValidator = require('../middlewares/categoriesValidator');
const tokenValidator = require('../middlewares/tokenValidator');

const router = express.Router();

router.get('/', tokenValidator, categoryController.getAllCategories);
router.post('/',
  tokenValidator,
  categoriesValidator,
  categoryController.registerCategory);

module.exports = router;