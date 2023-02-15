const { User } = require('../models');
const { generateToken } = require('../auth/jwtManager');
const { CONFLICT_STATUS } = require('../utils/httpStatuses');

const createNewUser = async (params) => {
  const { email } = params;
  const search = await User.findOne({ where: { email } });
  if (search) return { type: CONFLICT_STATUS };
  await User.create(params);
  const { password: _, ...userWithoutPwd } = params;
  const data = { userWithoutPwd };
  const token = generateToken(data);
  return { type: null, token };
};

module.exports = {
  createNewUser,
};