import http from 'http';

import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('In the middelware');
  next(); // allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
  console.log('In the next middelware');
})

const server = http.createServer(app);

server.listen(3000);