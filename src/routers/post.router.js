const express = require('express');
const { postController } = require('../controllers');
const tokenValidator = require('../middlewares/tokenValidator');
const postCreationValidator = require('../middlewares/postCreationValidator');

const router = express.Router();

router.get('/:id', tokenValidator, postController.getPostById);
router.put('/:id', tokenValidator, postController.updateUserPost);
router.get('/', tokenValidator, postController.getAllPosts);
router.post('/',
  tokenValidator,
  postCreationValidator,
  postController.postCreation);

module.exports = router;