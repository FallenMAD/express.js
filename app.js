import express from 'express';

import adminRoutes from './routes/admin.js';

const app = express();

app.use(express.urlencoded({extended: false}));

app.use(adminRoutes);

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Expres.js</h1>');
})

app.listen(3003);