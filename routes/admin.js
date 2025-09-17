import path from 'path';
import express from 'express';

import { rootDir } from '../utils/dirnameHelper.js';

const router = express.Router();

export const products = [];

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})

router.post('/add-product', (req, res, next) => {
  const { title } = req.body;
  products.push({title});
  res.redirect('/');
})

export default router;
