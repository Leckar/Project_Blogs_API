const { BlogPost, Category } = require('../models');
const postValidation = require('./validations/postValidation');
const { BAD_REQUEST_STATUS } = require('../utils/httpStatuses');

const errObj = { 
  type: BAD_REQUEST_STATUS,
  response: {
    message: 'one or more "categoryIds" not found',
  },
};

const categoryIdsValidation = async (data) => {
  const arr = await Promise.all(data.map(async (id) => {
    const result = await Category.findByPk(id);
    if (result) return true;
    return false;
  }));
  return arr.every((e) => e === true);
};

const createNew = async ({ user: { id: userId }, title, content, categoryIds }) => {
  const check = postValidation({ title, content, categoryIds });
  if (check.type) return check;
  const catIdValid = await categoryIdsValidation(categoryIds);
  if (!catIdValid) return errObj;
  const blogPosts = await BlogPost.create({ userId, title, content });
  await blogPosts.addCategory(categoryIds); // O aluno Rafael França me indicou o uso dessa função do sequelize;
  const response = await BlogPost.findByPk(blogPosts.id);
  return { type: null, response };
};

module.exports = {
  createNew,
};