const { BAD_REQUEST_STATUS } = require('../utils/httpStatuses');

const response = { message: 'Some required fields are missing' };

const titleValidation = (param) => {
  if (!param || param.length < 1) return true;
  return false;
};
const contentValidation = (param) => {
  if (!param || param.length < 1) return true;
  return false;
};
module.exports = (req, res, next) => {
  const { title, content } = req.body;
  const checkTitle = titleValidation(title);
  const checkContent = contentValidation(content);
  if (checkTitle || checkContent) {
    return res.status(BAD_REQUEST_STATUS).json(response);
  }
  next();
};