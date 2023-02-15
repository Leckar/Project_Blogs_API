const { BAD_REQUEST_STATUS } = require('../utils/httpStatuses');

const errMsg = { message: 'Some required fields are missing' };
module.exports = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(BAD_REQUEST_STATUS).json(errMsg);
  next();
};