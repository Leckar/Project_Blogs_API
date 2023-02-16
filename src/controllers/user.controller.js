const { userServices } = require('../services');
const { OK_STATUS, CREATED_STATUS, NO_CONTENT_STATUS } = require('../utils/httpStatuses');

const { createNewUser, deleteUser, getAll, getOne } = userServices;

const deleteMe = async (req, res) => {
  const { user: { id } } = req.body;
  await deleteUser(id);
  res.status(NO_CONTENT_STATUS).end();
};

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
  deleteMe,
  getAllUsers,
  getTargetUser,
  registrationAuthenticator,
};