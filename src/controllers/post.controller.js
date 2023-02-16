const { postServices } = require('../services');
const { CREATED_STATUS, OK_STATUS } = require('../utils/httpStatuses');

const { createNew, getAll } = postServices;

const getAllPosts = async (req, res) => {
  const { user } = req.body;
  const response = await getAll(user);
  res.status(OK_STATUS).json(response);
};

const postCreation = async (req, res) => {
  const { body } = req;
  const { type, response } = await createNew(body);
  if (type) return res.status(type).json(response);
  res.status(CREATED_STATUS).json(response);
};

module.exports = {
  getAllPosts,
  postCreation,
};