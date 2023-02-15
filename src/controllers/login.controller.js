const { loginService } = require('../services');
const { OK_STATUS/* , BAD_REQUEST_STATUS */ } = require('../utils/httpStatuses');

const { loginAuth } = loginService;

const loginAuthenticator = async (req, res) => {
    const { email, password } = req.body;
    const response = await loginAuth(email, password);
    if (response.type) {
      const { type } = response;
      return res.status(type).json({ message: 'Invalid fields' });
    }
    const { token } = response;
    res.status(OK_STATUS).json({ token });
}

module.exports = { 
  loginAuthenticator,
};