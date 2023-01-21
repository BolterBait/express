const express = require('express');
const router = require('./router');

const app = express();

// app.use("/", router);
app.use('/', router);
// app.use('/', router);

// app.use('/', (req, res, next) => {
//     console.log('hello from middleware');
//     next()
// });
// app.use('/', (req, res, next) => { console.log("hello from middelware2"); })
module.exports = {
  app,
};

// app.use("/", router);
