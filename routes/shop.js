import path from 'path';
import express from 'express';

import { rootDir } from '../utils/dirnameHelper.js';
import { products as adminData } from './admin.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop.pug');
});

export default router;