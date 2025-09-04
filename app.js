import express from 'express';

const app = express();

app.use(express.urlencoded({extended: false}));

app.use('/add-products', (req, res, next) => {
  res.send(`
    <h1>Add Products Page</h1>
    <form action="/product" method="POST"> 
      <input type="text" name="title" /> 
      <button type="submit">Send</button>
    </form>`
  );
})

app.use('/product', (req, res, next) => {
  console.log(req)
  console.log(req.body.title);
  res.redirect('/')
})

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Expres.js</h1>');
})


app.listen(3003);