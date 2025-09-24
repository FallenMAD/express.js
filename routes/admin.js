import express from 'express';

const router = express.Router();

export const products = [];

router.get('/add-product', (req, res, next) => {
  res.render('add-product', { docTitle: 'Add-product', path: '/admin/add-product' });
})

router.post('/add-product', (req, res, next) => {
  const { title } = req.body;
  products.push({title});
  res.redirect('/');
})

export default router;
