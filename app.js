import express from 'express';

const app = express();

app.use('/', (req, res, next) => {
  console.log('This is always running');
  next();
})

app.use('/add-products', (req, res, next) => {
  console.log('In the add-products middelware');
  res.send('<h1>Products Page</h1>');
})

app.use('/', (req, res, next) => {
  console.log('In the next middelware');
  res.send('<h1>Hello from Expres.js</h1>');
})


app.listen(3000);