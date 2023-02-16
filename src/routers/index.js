const loginRouter = require('./login.router');
const categoryRouter = require('./category.router');
const postRouter = require('./post.router');
const userRouter = require('./user.router');

module.exports = { 
  categoryRouter,
  loginRouter,
  postRouter,
  userRouter,
};