const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`<h1>Hello ${name}!</h1>`);
});

app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});