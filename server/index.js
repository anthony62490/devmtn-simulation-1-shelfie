const express = require('express');
const { json } = require('body-parser');

// const {VARS} = require('./controller');
const port = 3001;//change to .env

const app = express();
app.use(json());

app.listen(port, () => console.log(`Listening for requests on port ${port}`));