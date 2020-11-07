const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();

//bodyParser
app.use(bodyParser.json())

//import keys
const keys = require('./keys/keys');

//routers
const investmentRouters = require('./routes/investor-routes');


//registering routes as middlewares
app.use('/api/investors',investmentRouters);

mongoose
.connect(
    `mongodb+srv://${keys.mongoDBUsername}:${keys.mongoDBPassword}@cluster0.3kcv6.mongodb.net/${keys.DBName}?retryWrites=true&w=majority`,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
.then(()=>{
    app.listen(keys.PORT,() => {
        console.log(`listening on ${keys.PORT}`);
    })
})
.catch(err => {
    console.log(err)
})

