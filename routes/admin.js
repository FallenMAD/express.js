import express from 'express';

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(`
    <h1>Add Products Page</h1>
    <form action="/product" method="POST"> 
      <input type="text" name="title" /> 
      <button type="submit">Send</button>
    </form>`
  );
})

router.post('/product', (req, res, next) => {
  console.log(req);
  console.log(req.body);
  res.redirect('/');
})

export default router;
