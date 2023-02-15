const { Category } = require('../models');
const { BAD_REQUEST_STATUS } = require('../utils/httpStatuses');
const categoryNameValidation = require('./validations/categoryNameValidation');

const errMsg = '"name" is required';

const createNew = async (name) => {
  if (!categoryNameValidation(name)) return { type: BAD_REQUEST_STATUS, response: errMsg };
  const result = await Category.create({ name });
  if (!result) return { type: BAD_REQUEST_STATUS, response: errMsg };
  return { type: null, response: result };
};

const getAll = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = {
  createNew,
  getAll,
};