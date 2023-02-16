const { Category } = require('../../models');

module.exports = async (data) => {
  const arr = await Promise.all(data.map(async (id) => {
    const result = await Category.findByPk(id);
    if (result) return true;
    return false;
  }));
  return arr.every((e) => e === true);
};