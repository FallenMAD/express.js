import express from 'express';

const router = express.Router();

router.use('/', (req, res, next) => {
  res.send('<h1>Hello from Expres.js</h1>');
});

export default router;