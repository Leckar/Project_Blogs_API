const { userServices } = require('../services');
const { OK_STATUS, CREATED_STATUS } = require('../utils/httpStatuses');

const { createNewUser, getAll } = userServices;

const getAllUsers = async (_req, res) => {
  const response = await getAll();
  console.log(response);
  res.status(OK_STATUS).json(response);
};

const registrationAuthenticator = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await createNewUser({ displayName, email, password, image });
  if (response.type) return res.status(response.type).json({ message: 'User already registered' });
  const { token } = response;
  return res.status(CREATED_STATUS).json({ token });
};

module.exports = {
  registrationAuthenticator,
  getAllUsers,
};