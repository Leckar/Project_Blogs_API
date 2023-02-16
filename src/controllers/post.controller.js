const { postServices } = require('../services');
const { CREATED_STATUS, OK_STATUS } = require('../utils/httpStatuses');

const { createNew, getAll, getById, updatePost } = postServices;

const getAllPosts = async (_req, res) => {
  const response = await getAll();
  res.status(OK_STATUS).json(response);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { type, response } = await getById(id);
  if (type) return res.status(type).json(response);
  res.status(OK_STATUS).json(response);
};

const postCreation = async (req, res) => {
  const { body } = req;
  const { type, response } = await createNew(body);
  if (type) return res.status(type).json(response);
  res.status(CREATED_STATUS).json(response);
};

const updateUserPost = async (req, res) => {
  const { id } = req.params;
  const {
    user: { id: userId },
    title,
    content,
  } = req.body;
  const {
    type,
    response,
  } = await updatePost(id, userId, title, content);
  if (type) return res.status(type).json(response);
  res.status(OK_STATUS).json(response);
};

module.exports = {
  getAllPosts,
  getPostById,
  postCreation,
  updateUserPost,
};