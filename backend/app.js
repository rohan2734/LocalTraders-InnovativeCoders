const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();

//bodyParser
app.use(bodyParser.json())

//import keys
const keys = require('./keys/keys');

//routers
const vendorsRoutes = require('./routes/vendor-routes');


//registering routes as middlewares
app.use('/api/vendors',vendorsRoutes);

//error handler
app.use((error,req,res,next) => {
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message : error.message || `Something wrong happened, error 500`});
})

mongoose
.connect(
    `mongodb+srv://${keys.mongoDBUsername}:${keys.mongoDBPassword}@cluster0.3kcv6.mongodb.net/${keys.DBName}?retryWrites=true&w=majority`,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    })
.then(()=>{
    app.listen(keys.PORT,() => {
        console.log(`listening on ${keys.PORT}`);
    })
})
.catch(err => {
    console.log(err)
})

