const { userServices } = require('../services');
const { OK_STATUS, CREATED_STATUS } = require('../utils/httpStatuses');

const { createNewUser, getAll, getOne } = userServices;

const getAllUsers = async (_req, res) => {
  const response = await getAll();
  res.status(OK_STATUS).json(response);
};

const getTargetUser = async (req, res) => {
  const { id } = req.params;
  const { type, result } = await getOne(id);
  if (type) return res.status(type).json({ message: 'User does not exist' });
  res.status(OK_STATUS).json(result);
};

const registrationAuthenticator = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await createNewUser({ displayName, email, password, image });
  if (response.type) return res.status(response.type).json({ message: 'User already registered' });
  const { token } = response;
  return res.status(CREATED_STATUS).json({ token });
};

module.exports = {
  getAllUsers,
  getTargetUser,
  registrationAuthenticator,
};