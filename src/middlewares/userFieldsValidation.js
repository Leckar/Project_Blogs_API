const { BAD_REQUEST_STATUS } = require('../utils/httpStatuses');

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const msg = {
  name: '"displayName" length must be at least 8 characters long',
  email: '"email" must be a valid email',
  pwd: '"password" length must be at least 6 characters long',
};

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName || displayName.length < 8) {
    return res.status(BAD_REQUEST_STATUS).json({ message: msg.name });
  }
  next();
};
const validadeEmail = (req, res, next) => {
  const { email } = req.body;
  if (!EMAIL_REGEX.test(email)) {
    return res.status(BAD_REQUEST_STATUS).json({ message: msg.email });
  }
  next();
};
const validatePwd = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length < 6) {
    return res.status(BAD_REQUEST_STATUS).json({ message: msg.pwd });
  }
  next();
};
 const validateImage = (req, _res, next) => {
  const { image } = req.body;
  if (!image || typeof image !== 'string') {
    req.body.image = null;
    return next();
  }
  next();
};
module.exports = {
  validateDisplayName,
  validadeEmail,
  validatePwd,
  validateImage,
};