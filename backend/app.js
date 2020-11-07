const express = require('express');
const bodyParser = require('body-parser')

const app = express();

//import keys
const keys = require('./keys/keys');

//routers
const investmentRouters = require('./routes/investor-routes');


//registering routes as middlewares
app.use(investmentRouters);


app.listen(keys.PORT,() => {
    console.log(`listening on ${keys.PORT}`);
})