const { postServices } = require('../services');
const { CREATED_STATUS } = require('../utils/httpStatuses');

const { createNew } = postServices;

const postCreation = async (req, res) => {
  const { body } = req;
  const { type, response } = await createNew(body);
  if (type) return res.status(type).json(response);
  res.status(CREATED_STATUS).json(response);
};

module.exports = {
  postCreation,
};