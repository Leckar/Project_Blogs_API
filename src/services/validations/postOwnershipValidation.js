const { BlogPost } = require("../../models");

module.exports = async (id, userId) => {
  const check = await BlogPost.findByPk(id);
  if (check.userId !== userId) return false;
  return true;
};