const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const keys = require('./keys/keys');

app.listen(keys.PORT,() => {
    console.log(`listening on ${keys.PORT}`);
})