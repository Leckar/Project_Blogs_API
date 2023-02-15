const { decodeToken } = require('../auth/jwtManager');
const { UNAUTHORIZED_STATUS } = require('../utils/httpStatuses');

const msg = {
  null: 'Token not found',
  inv: 'Expired or invalid token',
};

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || authorization.length < 1) {
    return res.status(UNAUTHORIZED_STATUS).json({ message: msg.null });
  }
  try {
    const { data } = decodeToken(authorization);
    req.body.user = data;
    next();
  } catch (err) {
    return res.status(UNAUTHORIZED_STATUS).json({ message: msg.inv });
  }
};