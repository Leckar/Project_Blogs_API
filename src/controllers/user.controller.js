const { userServices } = require('../services');
const { CREATED_STATUS } = require('../utils/httpStatuses');

const { createNewUser } = userServices;

const registrationAuthenticator = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await createNewUser({ displayName, email, password, image });
  if (response.type) return res.status(response.type).json({ message: 'User already registered' });
  const { token } = response;
  return res.status(CREATED_STATUS).json({ token });
};

module.exports = {
  registrationAuthenticator,
};