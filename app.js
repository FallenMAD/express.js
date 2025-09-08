import path from 'path';
import express from 'express';

import { __dirname } from './utils/dirnameHelper.js';
 
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';

const app = express();

app.use(express.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '..', 'views', 'not-found-page.html'));
});

app.listen(3003);