const { OK_STATUS } = require("../utils/httpStatuses");

const loginAuthenticator = (req, res) => {
  console.log(teste);
  const { email, password } = req.body;

  res.status(OK_STATUS).json({message: `logado com ${email} e ${password}`});
};

module.exports = {
  loginAuthenticator,
}