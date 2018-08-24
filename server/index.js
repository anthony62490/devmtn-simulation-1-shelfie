const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const {
  viewProducts,
  // viewOneProduct, //add if needed
  addProducts,
  editProduct,
  deleteProduct
} = require('./controller');
const port = 3001;//change to .env

const app = express();
app.use(json());

app.get('/api/inventory', viewProducts);
// app.get('/api/inventory/:id', viewOneProduct)
app.post('/api/products', addProducts);
app.put('/api/products/edit/:id', editProduct);
app.delete('/api/products/delete/:id', deleteProduct);

massive(process.env.CONNECTION_STRING) //Have Massive poll the connection URI
  .then(dbInst => app.set('db', dbInst)) //set up a local database instance
  .catch(err => console.log(`error in Massive() - ${err}`));

app.listen(port, () => console.log(`Listening for requests on port ${port}`));