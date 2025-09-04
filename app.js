import express from 'express';

import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';

const app = express();

app.use(express.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3003);