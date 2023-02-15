const { BAD_REQUEST_STATUS } = require('../utils/httpStatuses');

const errMsg = { message: '"name" is required' };

module.exports = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(BAD_REQUEST_STATUS).json(errMsg);
  next();
};