const { categoryServices } = require('../services');
const { OK_STATUS, CREATED_STATUS } = require('../utils/httpStatuses');

const { createNew } = categoryServices;

const getAllCategories = async (_req, res) => {
  res.status(OK_STATUS).json({ message: 'placeholder' });
};

const registerCategory = async (req, res) => {
  const { name } = req.body;
  const { type, response } = await createNew(name);
  if (type) return res.status(type).json({ message: '"name" is required' });
  res.status(CREATED_STATUS).json(response);
};

module.exports = {
  getAllCategories,
  registerCategory,
};