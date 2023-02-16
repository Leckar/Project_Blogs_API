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
const categoryIdsValidation = (param) => {
  if (!param || param.length < 1) return true;
  return false;
};
module.exports = ({ title, content, categoryIds }) => {
  const checkTitle = titleValidation(title);
  const checkContent = contentValidation(content);
  const checkCategoryIds = categoryIdsValidation(categoryIds);
  if (checkTitle || checkContent || checkCategoryIds) {
    return { type: BAD_REQUEST_STATUS, response };
  }
  return { type: null, response: '' };
};