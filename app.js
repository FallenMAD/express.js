import express from 'express';

import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';

const app = express();

app.use(express.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3003);