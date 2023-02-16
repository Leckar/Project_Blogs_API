const { User } = require('../models');
const { generateToken } = require('../auth/jwtManager');
const { CONFLICT_STATUS, NOT_FOUND_STATUS } = require('../utils/httpStatuses');

const createNewUser = async (params) => {
  const { email } = params;
  const search = await User.findOne({ where: { email } });
  if (search) return { type: CONFLICT_STATUS };
  await User.create(params);
  const { password: _, ...userData } = params;
  const token = generateToken(userData);
  return { type: null, token };
};

const deleteUser = async (id) => {
  await User.destroy({
    where: { id },
  });
};

const getAll = async () => {
  const result = await User.findAll();
  result.forEach((e) => {
    e.password = undefined;
  });
  return result;
};

const getOne = async (id) => {
  const result = await User.findByPk(id);
  if (result) {
  result.password = undefined;
  return { type: null, result };
  }
  return { type: NOT_FOUND_STATUS, result: '' };
};

module.exports = {
  createNewUser,
  deleteUser,
  getAll,
  getOne,
};