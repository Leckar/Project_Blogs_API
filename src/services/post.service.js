const { BlogPost, Category, User } = require('../models');
const { BAD_REQUEST_STATUS, NOT_FOUND_STATUS,
  UNAUTHORIZED_STATUS } = require('../utils/httpStatuses');
const categoryIdsValidation = require('./validations/categoryIdsValidation');

const errObjNewPost = { 
  type: BAD_REQUEST_STATUS,
  response: {
    message: 'one or more "categoryIds" not found',
  },
};
const errObjFindById = { 
  type: NOT_FOUND_STATUS,
  response: {
    message: 'Post does not exist',
  },
};
const errObjUpdatePost = { 
  type: UNAUTHORIZED_STATUS,
  response: {
    message: 'Unauthorized user',
  },
};

// const postOwnershipValidation

const createNew = async ({ user: { id: userId }, title, content, categoryIds }) => {
  const check = await categoryIdsValidation(categoryIds);
  if (!check) return errObjNewPost;
  const blogPosts = await BlogPost.create({ userId, title, content });
  await blogPosts.addCategory(categoryIds); // O aluno Rafael França me indicou o uso dessa função do sequelize;
  const response = await BlogPost.findByPk(blogPosts.id);
  return { type: null, response };
};

// const deletePost = (id, userId)

const getAll = async () => {
  const result = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories' }],
  });
  return result;
};

const getById = async (id) => {
  const result = await BlogPost.findOne({ 
    where: { id },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
    }],
  });
  if (!result) return errObjFindById;
  return { type: null, response: result };
};

const updatePost = async (id, userId, title, content) => {
  const check = await BlogPost.findByPk(id);
  if (check.userId !== userId) return errObjUpdatePost;
  await BlogPost.update({
    title,
    content,
  }, {
    where: { id },
  });
  const response = await getById(id);
  return response;
};

module.exports = {
  createNew,
  getAll,
  getById,
  updatePost,
};