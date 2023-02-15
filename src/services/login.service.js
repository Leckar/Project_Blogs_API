const { User } = require('../models');
const { generateToken } = require('../auth/jwtManager');

const { BAD_REQUEST_STATUS } = require('../utils/httpStatuses');

const loginAuth = async (email, password) => {
  const result = await User.findOne({ where: { email, password } });
  if (!result) return { type: BAD_REQUEST_STATUS };
  const { password: _, ...userData } = result.dataValues;
  const token = generateToken(userData);
  return { type: null, token };
};

module.exports = {
  loginAuth,
};