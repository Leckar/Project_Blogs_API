const express = require('express');
const { categoryRouter, loginRouter, userRouter, postRouter } = require('./routers');
// ...

const app = express();

app.use(express.json());
app.use('/categories', categoryRouter);
app.use('/login', loginRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
