import path from 'path';
import express from 'express';

import { rootDir } from '../utils/dirnameHelper.js';

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})

router.post('/add-product', (req, res, next) => {
  res.redirect('/');
})

export default router;
