import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('In the middelware');
  next(); // allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
  console.log('In the next middelware');
  res.send('<h1>Hello from Expres.js</h1>')
})

app.listen(3000);